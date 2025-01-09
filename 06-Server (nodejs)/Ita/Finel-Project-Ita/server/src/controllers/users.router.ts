import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Utils from '../services/utils.service';
import { uploadProfilePicture } from '../middlewares/upload';
import jwt from 'jsonwebtoken';
import { authMiddleware } from '../middlewares/authMiddleware';
import { ACTIVE_USERS_SESSIONS_AND_TOKENS } from '../services/sessions.management.service';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { promisePool } from '../index'; // Import MySQL pool connection
import { RowDataPacket } from 'mysql2';

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

    // Check if the email already exists in the users table
    const [rows]: any = await promisePool.query(`SELECT email FROM users WHERE email = ?`, [email]);

    if (rows.length > 0) {
      res.status(400).json({ error: 'Email is already registered' });
      return;
    }

    // Generate a 6-digit random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated verification code:', verificationCode);

    // Insert the code into the verification_codes table
    await promisePool.query(
      `INSERT INTO verification_codes (email, code, createdDate) VALUES (?, ?, NOW())
       ON DUPLICATE KEY UPDATE code = VALUES(code), createdDate = NOW()`,
      [email, verificationCode]
    );

    // Send the verification code via email
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
    const { email, fullName, password, companyname, companynumber, address, city } = req.body;

    // Check if the email is already registered
    const [rows] = await promisePool.query(`SELECT * FROM users WHERE email = ?`, [email]);
    if ((rows as any[]).length > 0) {
      res.status(400).json({ error: 'Email already registered' });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a unique user ID and capture the current date
    const userId = uuidv4();

    let fileName = (req as any).fileName;
    if (!fileName) {
      fileName = 'default_profile.jpg'; // Use a default profile picture
    }

    // Save the user to the database
    await promisePool.query(
      `INSERT INTO users (userId, email, createdDate, password, fullName, companyName, companyNumber, address, city, profilePic)
       VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?, ?)`,
      [userId, email, hashedPassword, fullName, companyname, companynumber, address, city, `/uploads/${fileName}`]
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

    // Find user by email
    const [rows] = await promisePool.query(`SELECT * FROM users WHERE email = ?`, [email]);
    const user = (rows as any[])[0];

    if (!user) {
      res.status(401).send("Invalid email or password");
      return;
    }

    // Compare password with stored hash
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).send("Invalid email or password");
      return;
    }

    // Generate tokens if authentication successful
    const payload = {
      email: user.email,
      userId: user.userId,
      companyname: user.companyName,
      companynumber: user.companyNumber,
      fullname: user.fullName
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string);

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

  // making sure the server is no longer treating the user accessToken & refreshToken as valid
  delete ACTIVE_USERS_SESSIONS_AND_TOKENS[userId];

  res.send('Logged out successfully');
});

usersRouter.post('/update-profile', authMiddleware, async (req,res) => {
  //TODO - implement if we have time
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
          `
          SELECT 
              fullName,
              companyName,
              companyNumber,
              address,
              city,
              profilePic
          FROM 
              users
          WHERE 
              userId = ?;
          `,
          [userId]
      );

      if (rows.length === 0) {
          res.status(404).send('User not found');
          return;
      }

      res.json(rows[0]);
  } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).send('Error fetching user details.');
  }
});

//עידכון פרטי המשתמש
usersRouter.put('/details/:userId', authMiddleware, uploadProfilePicture.single('profilePic'), async (req, res): Promise<void> => {
  const { userId } = req.params;
  const { fullName, companyName, companyNumber, address, city } = req.body;
  const profilePic = req.file ? `/uploads/${req.file.filename}` : null;

  if (!userId) {
      res.status(400).send('User ID is required');
      return;
  }

  if (!fullName || !companyName || !companyNumber) {
      res.status(400).send('Full name, company name, and company number are required');
      return;
  }

  try {
      const [result]: any = await promisePool.query(
          `
          UPDATE 
              users
          SET 
              fullName = ?, 
              companyName = ?, 
              companyNumber = ?, 
              address = ?, 
              city = ?, 
              profilePic = COALESCE(?, profilePic)
          WHERE 
              userId = ?;
          `,
          [fullName, companyName, companyNumber, address, city, profilePic, userId]
      );

      if (result.affectedRows === 0) {
          res.status(404).send('User not found');
          return;
      }

      res.send('User details updated successfully');
  } catch (error) {
      console.error('Error updating user details:', error);
      res.status(500).send('Error updating user details.');
  }
});

// קבלת נתוני חברה (בשביל קבלה)
usersRouter.get('/company-details/:userId', async (req, res): Promise<void> => {
  try {
      const { userId } = req.params;

      const [rows] = await promisePool.query<RowDataPacket[]>(
          `SELECT 
              companyName,
              companyNumber,
              address,
              city,
              profilePic as logoUrl
          FROM users 
          WHERE userId = ?`,
          [userId]
      );

      if (rows.length === 0) {
        res.status(404).json({ error: 'Company not found' });
        return;
      }

      res.json(rows[0]);
  } catch (error) {
      console.error('Error fetching company details:', error);
      res.status(500).json({ error: 'Failed to fetch company details' });
  }
});


// Step 1: Check email existence and send verification code
usersRouter.post('/check-email', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    // Check if the email exists in the users table
    const [rows]: any = await promisePool.query(
      `SELECT email FROM users WHERE email = ?`, 
      [email]
    );

    if (rows.length === 0) {
      res.status(404).json({ error: 'Email not found' });
      return;
    }

    // Generate a 6-digit random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Insert or update the code in verification_codes table
    await promisePool.query(
      `INSERT INTO verification_codes (email, code, createdDate) 
       VALUES (?, ?, NOW())
       ON DUPLICATE KEY UPDATE code = VALUES(code), createdDate = NOW()`,
      [email, verificationCode]
    );

    // Send the verification code via email
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

// Step 2: Verify the code (you can reuse your existing verify-code endpoint)
// But let's add a time check to ensure the code hasn't expired
usersRouter.post('/verify-code', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email, code } = req.body;

    // Check if code exists and is not expired (15 minutes validity)
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

// Step 3: Reset the password
usersRouter.post('/reset-password', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    const [result] = await promisePool.query(
      `UPDATE users SET password = ? WHERE email = ?`,
      [hashedPassword, email]
    );

    if ((result as any).affectedRows === 0) {
      res.status(404).json({ error: 'המשתמש לא נמצא' });
      return;
    }

    // Clean up the verification code
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

