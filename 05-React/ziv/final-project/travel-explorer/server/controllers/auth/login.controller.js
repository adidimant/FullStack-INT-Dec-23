import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { logger } from '../../utils/logger.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // בדיקה אם יש נתונים בגוף הבקשה
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // חיפוש המשתמש לפי אימייל
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    // השוואת סיסמאות
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // יצירת טוקן JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // החזרת תגובה מוצלחת
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
    });
  } catch (error) {
    // אם יש שגיאה במהלך תהליך ההתחברות, נרשום את השגיאה בצורה מפורטת
    logger.error('Login error:', error);

    // החזרת שגיאה עם מידע נוסף
    if (error.name === 'MongoError') {
      return res.status(500).json({ message: 'Database error during login' });
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(500).json({ message: 'Error generating JWT token' });
    }

    // שגיאה כללית
    res.status(500).json({ message: 'Server error during login', error: error.message });
  }
};
