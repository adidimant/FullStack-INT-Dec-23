import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger.js';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    logger.error('Token verification error:', error);

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

/*
קבלת טוקן מהכותרת: הקוד בודק אם יש טוקן ב-header של הבקשה, תחת המפתח Authorization. הטוקן מצופה להיות בפורמט Bearer <token>, ולכן הוא מפריד את המילה Bearer מהטוקן עצמו.

בדיקת תקינות הטוקן: אם לא נמצא טוקן, הוא מחזיר תשובה עם קוד 401 (לא מורשה) ומסביר שדרושה אימות. אם נמצא טוקן, הקוד בודק את תקינותו באמצעות jwt.verify עם המפתח הסודי שמאוחסן ב-process.env.JWT_SECRET.

פענוח הטוקן: אם הטוקן תקין, הקוד פורס אותו ומוסיף את userId מהפענוח למשתנה req.userId, כך שניתן לגשת אליו בשאר הקוד.

העברה לפונקציה הבאה: אם כל הבדיקות עברו בהצלחה, הקוד מפעיל את next() כדי להעביר את הבקשה לפונקציה הבאה במידלוואר או במנהל ה-route.

טיפול בשגיאות:

אם הטוקן לא תקין (JsonWebTokenError), הקוד מחזיר תשובה עם קוד 401 ומסביר שהטוקן לא חוקי.
אם הטוקן פג תוקף (TokenExpiredError), מחזיר תשובה עם קוד 401 ומסביר שהטוקן פג.
אם יש שגיאה אחרת, מחזיר תשובה עם קוד 500 (שגיאת שרת) ומפרט את השגיאה.
הקוד מבצע את תהליך אימות הטוקן בצורה מסודרת ומטפל במקרים שונים של שגיאות.
*/