import jwt from 'jsonwebtoken';
import { logger } from './logger.js';

export const generateToken = (userId) => {
  try {
    return jwt.sign(
      { userId },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
  } catch (error) {
    logger.error('Token generation error:', error);
    throw error;
  }
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    logger.error('Token verification error:', error);
    throw error;
  }
};

/*

הקובץ jwt.js מכיל שתי פונקציות לניהול טוקנים מבוססי JWT:

generateToken - יוצר טוקן חדש עבור משתמש על ידי ח signing של מזהה המשתמש עם סוד המוגדר בסביבת העבודה (המשתנה JWT_SECRET). טוקן זה תקף לפי הזמן המוגדר במשתנה JWT_EXPIRES_IN (ברירת המחדל היא 7 ימים). אם יש שגיאה בתהליך, הפונקציה תקלוט ותתעד את השגיאה בלוג.

verifyToken - מאמת טוקן שנשלח על ידי המשתמש, משווה אותו עם הסוד שהוגדר בסביבת העבודה. אם יש שגיאה, הפונקציה תקלוט ותתעד את השגיאה בלוג.
*/