import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { logger } from '../../utils/logger.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // בדיקה אם כל השדות מסופקים
    if (!name || !email || !password) {
      logger.warn('Missing required fields in registration request');
      return res.status(400).json({ message: 'Missing required fields: name, email, password' });
    }

    // בדיקה אם כתובת האימייל תקינה
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      logger.warn('Invalid email format:', email);
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // בדיקה אם המשתמש כבר קיים
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      logger.info(`Registration attempt with existing email: ${email}`);
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash סיסמה לפני השמירה
    let hashedPassword;
    try {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    } catch (error) {
      logger.error('Error hashing password:', error);
      return res.status(500).json({ message: 'Error hashing password', error: error.message });
    }

    // יצירת אובייקט משתמש חדש
    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // שמירת המשתמש למסד הנתונים
    let savedUser;
    try {
      savedUser = await user.save();
      logger.info(`User registered successfully: ${savedUser.email}`);
    } catch (error) {
      logger.error('Error saving user to database:', error);
      return res.status(500).json({ message: 'Error saving user to database', error: error.message });
    }

    // יצירת אסימון JWT
    let token;
    try {
      token = jwt.sign(
        { userId: savedUser._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1h' } // ברירת מחדל לשעה אם לא מוגדר
      );
    } catch (error) {
      logger.error('Error creating JWT token:', error);
      return res.status(500).json({ message: 'Error creating JWT token', error: error.message });
    }

    // שליחת תשובה עם פרטי המשתמש והאסימון
    res.status(201).json({
      token,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        avatar: savedUser.avatar || null, // ברירת מחדל ל-null אם לא מוגדר
      },
    });
  } catch (error) {
    logger.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};
