import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Utils from '../services/utils.service';
import { deleteFile, getAbsoluteFilePath, getDbFilePath, uploadProfilePicture } from '../middlewares/upload';
import jwt from 'jsonwebtoken';
import { authMiddleware } from '../middlewares/authMiddleware';
import { ACTIVE_USERS_SESSIONS_AND_TOKENS } from '../services/sessions.management.service';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { promisePool } from '../index'; // Import MySQL pool connection
import { RowDataPacket } from 'mysql2';
import path from 'path';
import fs from 'fs';


import { fstat } from 'fs';

dotenv.config();

const usersRouter = express.Router();

const expirationTime = `${process.env.ACCESS_TOKEN_EXPIRATION_TIME || 600000}ms`;

const generateAccessToken = (payload: object): string => {
  const accessToken = jwt.sign({ ...payload, iat: Date.now() }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: expirationTime });
  return accessToken;
};

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log("Error connecting to email server:", error);
  } else {
    console.log("Email server connection successful!");
  }
});

usersRouter.post('/send-code', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    const [rows]: any = await promisePool.query(`SELECT email FROM users WHERE email = ?`, [email]);

    if (rows.length > 0) {
      res.status(400).json({ error: 'Email is already registered' });
      return;
    }

    
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated verification code:', verificationCode);

    await promisePool.query(
      `INSERT INTO verification_codes (email, code, createdDate) VALUES (?, ?, NOW())
       ON DUPLICATE KEY UPDATE code = VALUES(code), createdDate = NOW()`,
      [email, verificationCode]
    );

    try {
      await transporter.sendMail({
        from: `"חשבונית בקליק" <${process.env.EMAIL_USER}>`, // Use app name as sender
        to: email,
        subject: 'קוד אימות לרישום',
        text: `קוד האימות שלך הוא: ${verificationCode}`,
      });
      console.log('Verification email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      res.status(500).json({ error: 'Failed to send email. Please try again later.' });
      return;
    }

    res.status(200).json({ message: 'Verification code sent successfully' });
  } catch (error) {
    console.error('Error in /send-code:', error);
    res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
  }
});


usersRouter.post('/verify-code', async (req, res): Promise<void> => {
  try {
    const { email, code } = req.body;

    const [rows] = await promisePool.query(
      `SELECT * FROM verification_codes WHERE email = ? AND code = ?`,
      [email, code]
    );

    if ((rows as any[]).length === 0) {
      res.status(400).json({ error: 'Invalid or expired verification code' });
      return;
    }

    res.status(200).json({ message: 'Verification successful' });

    await promisePool.query(`DELETE FROM verification_codes WHERE email = ?`, [email]);
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});

usersRouter.post('/complete-registration', uploadProfilePicture.single('profilePic'), async (req, res): Promise<void> => {
  try {
    const { email, fullName, password, companyName, companyNumber, address, city } = req.body;

    // Validate required fields
    if (!fullName || !companyName || !companyNumber || !address || !city || !email || !password) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    // Check if email already exists in the database
    const [rows] = await promisePool.query(`SELECT * FROM users WHERE email = ?`, [email]);
    if ((rows as any[]).length > 0) {
      res.status(400).json({ error: 'Email already registered' });
      return;
    }

 
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const userId = uuidv4();

    let profilePicPath = '/uploads/altLogo.png'; 

    if (req.file) {
      profilePicPath = `/uploads/${req.file.filename}`;

      const [oldUser] = await promisePool.query<RowDataPacket[]>(`SELECT profilePic FROM users WHERE email = ?`, [email]);

      if (oldUser[0]?.profilePic && !oldUser[0].profilePic.includes('default_profile')) {
        try {
          await deleteFile(oldUser[0].profilePic);
        } catch (err) {
          console.error('Error deleting old profile picture:', err);
        }
      }
    }

    await promisePool.query(
      `INSERT INTO users (userId, email, createdDate, password, fullName, companyName, companyNumber, address, city, profilePic)
       VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?, ?)`,
      [userId, email, hashedPassword, fullName, companyName, companyNumber, address, city, profilePicPath]
    );

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

usersRouter.post('/login', Utils.validateRequiredParams(['email', 'password']), async (req, res): Promise<void> => {
  try {
    const { email, password } = req.body;

    const [rows] = await promisePool.query(`SELECT * FROM users WHERE email = ?`, [email]);
    const user = (rows as any[])[0];

    if (!user) {
      res.status(401).send("Invalid email or password");
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).send("Invalid email or password");
      return;
    }

    const payload = {
      email: user.email,
      userId: user.userId,
      companyname: user.companyName,
      companynumber: user.companyNumber,
      fullname: user.fullName
    };

    //יצירת טוקן וריפרש-טוקן
    const accessToken = generateAccessToken(payload);
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string);

    //ניהול משתמשים פעילים
    ACTIVE_USERS_SESSIONS_AND_TOKENS[user.userId] = {
      accessToken,
      refreshToken,
      lastActivity: Date.now()
    };

    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send("An error occurred during login");
  }
});

usersRouter.get('/token', (req, res) => {
  const authorizationHeader = req.headers.authorization; // 'Bearer <refresh-token>'
  if (typeof authorizationHeader == 'string') {
    const refreshToken = authorizationHeader.split(' ')?.[1];
    if (refreshToken) {
      try {
        const userData = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string);
        if (typeof userData == 'object') {
          const accessToken = generateAccessToken(userData);
          res.json({ accessToken });
          return;
        }
      } catch (err) {}
    }
  }
  res.status(401).send("Unauthorized! please log in!");
});

usersRouter.post('/logout', authMiddleware, (req, res) => {
  const userData = (req as any).userData;
  const userId = userData.userId;

  delete ACTIVE_USERS_SESSIONS_AND_TOKENS[userId];

  res.send('Logged out successfully');
});











//קבלת פרטי המשתמש
usersRouter.get('/details/:userId', async (req, res): Promise<void> => {
  const { userId } = req.params;

  if (!userId) {
    res.status(400).send('User ID is required');
    return;
  }

  try {
    const [rows]: any = await promisePool.query(
      `SELECT fullName, companyName, companyNumber, address, city, profilePic
       FROM users WHERE userId = ?;`,
      [userId]
    );

    if (rows.length === 0) {
      res.status(404).send('User not found');
      return;
    }

   
    if (rows[0].profilePic) {
      try {
        const absolutePath = getAbsoluteFilePath(rows[0].profilePic);
        const imageBuffer = await fs.promises.readFile(absolutePath);
        rows[0].profilePic = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
      } catch (err) {
        console.error('Error reading profile picture:', err);
        rows[0].profilePic = null;
      }
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).send('Error fetching user details.');
  }
});

// עידכון נתוני משתמש
usersRouter.put('/details/:userId', authMiddleware, uploadProfilePicture.single('profilePic'), async (req, res): Promise<void> => {
  const { userId } = req.params;
  const { fullName, companyName, companyNumber, address, city } = req.body;

  if (!fullName || !companyName || !companyNumber || !address || !city) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  try {
    let profilePicPath: string | undefined;

    if (req.file) {
      // ממיר את שם הקובץ לנתיב מלא לשמירה במסד הנתונים
      profilePicPath = getDbFilePath(req.file.filename);

      // מביא את נתיב התמונה הישנה מהמסד נתונים
      const [oldUser] = await promisePool.query<RowDataPacket[]>(
        'SELECT profilePic FROM users WHERE userId = ?',
        [userId]
      );

      // אם יש תמונה  ישנה והיא לא ברירת מחדל אז מוחק את התמונה הישנה
      if (oldUser[0]?.profilePic && !oldUser[0].profilePic.includes('default_profile')) {
        try {
          await deleteFile(oldUser[0].profilePic);
        } catch (err) {
          console.error('Error deleting old profile picture:', err);
          
        }
      }
    }
    // שאילתה אם אפשרות האם הועלתה תמונה חדשה או שלא
    const updateQuery = `
      UPDATE users
      SET 
        fullName = ?,
        companyName = ?,
        companyNumber = ?,
        address = ?,
        city = ?
        ${profilePicPath ? ', profilePic = ?' : ''}
      WHERE userId = ?
    `;

    const queryParams = profilePicPath
      ? [fullName, companyName, companyNumber, address, city, profilePicPath, userId]
      : [fullName, companyName, companyNumber, address, city, userId];

    const [result] = await promisePool.query(updateQuery, queryParams);

    if ((result as any).affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // 
    let base64Image = null;
    if (profilePicPath) { //אם תמונה חדשה
      try {
        const absolutePath = getAbsoluteFilePath(profilePicPath); //קריאת קובץ התמונה
        const imageBuffer = await fs.promises.readFile(absolutePath); 
        base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
      } catch (err) {
        console.error('Error reading new profile picture:', err);
      }
    }

    res.json({
      message: 'User details updated successfully',
      profilePic: base64Image
    });

  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ error: 'Internal server error while updating user details' });
  }
});













usersRouter.post('/check-email', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    // בדיקה האם האימייל נמצא בטבלה
    const [rows]: any = await promisePool.query(
      `SELECT email FROM users WHERE email = ?`, 
      [email]
    );

    if (rows.length === 0) {
      res.status(404).json({ error: 'Email not found' });
      return;
    }

    
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    await promisePool.query(
      `INSERT INTO verification_codes (email, code, createdDate) 
       VALUES (?, ?, NOW())
       ON DUPLICATE KEY UPDATE code = VALUES(code), createdDate = NOW()`,
      [email, verificationCode]
    );

    try {
      await transporter.sendMail({
        from: `"חשבונית בקליק" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'קוד אימות לשחזור סיסמה',
        text: `קוד האימות שלך לשחזור הסיסמה הוא: ${verificationCode}`,
        html: `
          <div dir="rtl">
            <h2>שחזור סיסמה</h2>
            <p>קוד האימות שלך לשחזור הסיסמה הוא:</p>
            <h1>${verificationCode}</h1>
            <p>הקוד תקף ל-15 דקות בלבד.</p>
          </div>
        `
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      res.status(500).json({ error: 'שליחת המייל נכשלה. אנא נסה שנית.' });
      return;
    }

    res.status(200).json({ message: 'Verification code sent successfully' });
  } catch (error) {
    console.error('Error in /check-email:', error);
    res.status(500).json({ error: 'אירעה שגיאה. אנא נסה שנית.' });
  }
});


usersRouter.post('/verify-code', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email, code } = req.body;

    const [rows] = await promisePool.query(
      `SELECT * FROM verification_codes 
       WHERE email = ? 
       AND code = ? 
       AND createdDate > DATE_SUB(NOW(), INTERVAL 15 MINUTE)`,
      [email, code]
    );

    if ((rows as any[]).length === 0) {
      res.status(400).json({ error: 'קוד לא תקין או שפג תוקפו' });
      return;
    }

    res.status(200).json({ message: 'Code verified successfully' });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ error: 'אימות הקוד נכשל' });
  }
});

usersRouter.post('/reset-password', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await promisePool.query(
      `UPDATE users SET password = ? WHERE email = ?`,
      [hashedPassword, email]
    );

    if ((result as any).affectedRows === 0) {
      res.status(404).json({ error: 'המשתמש לא נמצא' });
      return;
    }

    await promisePool.query(
      `DELETE FROM verification_codes WHERE email = ?`,
      [email]
    );

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'שחזור הסיסמה נכשל' });
  }
});




export default usersRouter;

