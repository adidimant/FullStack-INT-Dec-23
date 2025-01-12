import authRoutes from './auth.js';
import userRoutes from './users.js';
import protectedRoutes from './protected.js';
import reviewRoutes from './reviews.js';
import { verifyToken } from '../middleware/auth.js';

export const setupRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/countries', countryRoutes);
  app.use('/api/users', verifyToken, userRoutes);
  app.use('/api/protected', protectedRoutes);
  app.use('/api/reviews', reviewRoutes);
};

/*

/api/auth: מחבר את הנתיבים של authRoutes (התחברות והרשמה).
/api/countries: מחבר את הנתיבים של countryRoutes (לא הוזכר בקוד שסיפקת, אבל זה מתייחס לנתיב של מדינות).
/api/users: מחבר את הנתיבים של userRoutes ומחייב אימות טוקן JWT לפני גישה לנתיב זה באמצעות verifyToken.
/api/protected: מחבר את הנתיבים של protectedRoutes (נתיבים מוגנים).
/api/reviews: מחבר את הנתיבים של reviewRoutes (ביקורות).
setupRoutes:

פונקציה שמחברת את כל הנתיבים לאפליקציה, כך שכל נתיב יהיה זמין באמצעות הכתובת המתאימה.
מה הקוד עושה בפועל:
הקוד מארגן את כל הנתיבים של ה-API ומחבר אותם לאפליקציה כך שכל נתיב יהיה זמין תחת הכתובת המתאימה. הנתיב /api/users מחייב אימות טוקן JWT לפני גישה, והנתיבים האחרים אינם מוגנים.


*/