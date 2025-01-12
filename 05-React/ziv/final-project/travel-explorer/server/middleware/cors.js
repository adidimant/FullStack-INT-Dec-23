import cors from 'cors';
import { logger } from '../utils/logger.js';

// אפשר חיבורים מכל IP של לקוח
const allowedOrigins = [
  'http://localhost:5503',
  'http://127.0.0.1:5503',
  /^http:\/\/10\.0\.0\.\d+:5503$/,  //אפשר כל IP ברשת המשנה 10.0.0.x
  'http://127.0.0.1:5504',
  'http://localhost:5504'
];

const corsOptions = {
  origin: (origin, callback) => {
    // אפשר בקשות ללא מקור (כמו אפליקציות לנייד או בקשות סלסול)
    if (!origin) return callback(null, true);

    // בדוק אם מקור מותר
    const isAllowed = allowedOrigins.some(allowed => 
      typeof allowed === 'string' 
        ? allowed === origin
        : allowed.test(origin)
    );

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`Blocked request from unauthorized origin: ${origin}`);
      callback(null, false); // חסום בקשה מבלי לזרוק שגיאה
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

export const configureCors = (app) => {
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
  
  // טפל בשגיאות CORS בחן
  app.use((err, req, res, next) => {
    if (err.name === 'CORSError') {
      logger.error('CORS Error:', err);
      res.status(403).json({ message: 'Access denied due to CORS policy' }); // הודעת שגיאה מותאמת אישית
    } else {
      next(err);
    }
  });
};

export default cors(corsOptions);


/*

הגדרת רשימת מקורות מותרים (allowedOrigins):

allowedOrigins מכילה את הכתובות של הלקוחות המורשים להתחבר לשרת. רשימה זו כוללת כתובת URL אחת מקומית (למשל http://localhost:5503) וכתובת תת-רשת (/^http:\/\/10\.0\.0\.\d+:5503$/), המאפשרת חיבורים מכל כתובת IP בתת-רשת 10.0.0.x.
הגדרת אפשרויות CORS:

corsOptions הוא אובייקט שמכיל את כל ההגדרות שקשורות ל-CORS (Cross-Origin Resource Sharing).
הגדרת ה-origin: הפונקציה origin בודקת אם מקור הבקשה נמצא ברשימת המקורות המותרים. אם לא, היא חוסמת את הבקשה ומדפיסה אזהרה על כך.
credentials: true: מאפשר לשלוח קובצי קוקיז או מידע רגיש אחר עם הבקשות.
methods: מגדיר אילו שיטות HTTP מותרים (GET, POST, PUT, DELETE, OPTIONS).
allowedHeaders: מגדיר אילו כותרות HTTP מותרים (Content-Type, Authorization).
exposedHeaders: מגדיר אילו כותרות חשובות יוצגו למבקש (Content-Range, X-Content-Range).
הגדרת המידלוואר של CORS:

app.use(cors(corsOptions)): מגדיר את המידלוואר של CORS עבור כל הבקשות.
app.options('*', cors(corsOptions)): מאפשר את בקשות ה-OPTIONS (המשמשות לבדוק אילו שיטות מותרים).
טיפול בשגיאות CORS:

אם יש שגיאה שנגרמה על ידי בעיית CORS (לדוגמה, מקור לא מאושר), המידלוואר יטפל בה ויחזיר תשובה עם קוד 403 (גישה נדחתה), יחד עם הודעת שגיאה מותאמת.
ייצוא המידלוואר:

configureCors: פונקציה שמקבלת את האפליקציה כפרמטר ומבצעת את כל ההגדרות הנדרשות עבור CORS.
export default cors(corsOptions): ייצוא של המידלוואר עבור שימוש במקומות אחרים אם צריך.
הקוד מספק הגנה על ידי הגבלת הגישה לשרת רק למקורות מותרים, ומטפל בשגיאות CORS בצורה מסודרת עם הודעות מותאמות.
*/