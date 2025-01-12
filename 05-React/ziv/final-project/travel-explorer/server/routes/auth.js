import express from 'express';
import { register, login, verifyToken } from '../controllers/auth/index.js';
import { validateRegistration, validateLogin } from '../middleware/validation.js';
import { rateLimiter } from '../middleware/rateLimiter.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

router.use(rateLimiter);

router.use((req, res, next) => {
  logger.info(`Auth route accessed: ${req.method} ${req.path}`);
  next();
});

router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);
router.post('/verify', verifyToken);

export default router;



/*

הקוד מגדיר את routes/auth.js עבור ניהול הרשמה, התחברות ואימות משתמשים במערכת באמצעות Express.

מה הקוד עושה:
express.Router():

יוצר אובייקט router שמנהל את כל הנתיבים הקשורים לאותנטיקציה (הרשמה, התחברות, אימות).
הגדרת נתיבים:

/register:
מבצע את האימות של הנתונים שהוזנו על ידי המשתמש (validateRegistration).
אם האימות מצליח, קורא לפונקציית register כדי לבצע את ההרשמה.
/login:
מבצע את האימות של הנתונים שהוזנו על ידי המשתמש (validateLogin).
אם האימות מצליח, קורא לפונקציית login כדי לבצע את ההתחברות.
/verify:
קורא לפונקציית verifyToken כדי לאמת את הטוקן שנשלח מהלקוח.
שימוש ב-rateLimiter:

מגביל את מספר הבקשות שניתן לשלוח מאותו כתובת IP תוך פרק זמן מסוים (15 דקות), כך שניתן לשלוח עד 100 בקשות בלבד.
שימוש ב-logger:

כל בקשה לנתיב של Auth מתועדת בלוג עם פרטי הבקשה (שיטה ונתיב) על מנת לעקוב אחרי השימוש בנתיבים אלו.
מה הקוד עושה בפועל:
הקוד מגדיר נתיבים שמבצעים את פעולות ההרשמה, התחברות, ואימות משתמשים. הוא כולל אימות קלט, הגבלת בקשות ממקור זהה, ורישום פעולות ב-log.
*/
