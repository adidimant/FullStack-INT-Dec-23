import jwt from 'jsonwebtoken';
import { logger } from '../../utils/logger.js';

export const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, userId: decoded.userId });
  } catch (error) {
    logger.error('Token verification error:', error);
    res.json({ valid: false });
  }
};

/*
הקוד ב-`verify.controller.js` אחראי לבדוק אם טוקן JWT שהתקבל ב-`req.body` הוא תקין.

**הסבר על הקוד:**
- **jwt.verify(token, process.env.JWT_SECRET):** מאמת את הטוקן על ידי השוואה בין הטוקן והסוד (secret) שנמצא במשתנה הסביבה `JWT_SECRET`.
- **res.json({ valid: true, userId: decoded.userId }):** אם הטוקן תקין, מחזיר תשובה עם `valid: true` ו-`userId` מתוך המידע המפוענח בטוקן.
- **catch (error):** אם יש שגיאה (למשל, אם הטוקן לא תקין או פג תוקף), מחזיר תשובה עם `valid: false`.

הפונקציה מאפשרת לאמת את הטוקן ולוודא שהמשתמש מחובר באופן תקין.
*/