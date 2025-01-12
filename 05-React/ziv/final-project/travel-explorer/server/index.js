import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/database.js';
import { configureCors } from './middleware/cors.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './utils/logger.js';
import countryRoutes from './routes/countryRoutes.js';
import authRoutes from './routes/auth.js'; 

dotenv.config();

const app = express();
const httpServer = createServer(app);

const startServer = async () => {
  try {
    // התחברות ל-MongoDB
    await connectDB();

    // הגדרת WebSocket
    const io = new Server(httpServer, {
      cors: {
        origin: [
          'http://localhost:5503',
          'http://127.0.0.1:5503',
          'http://localhost:5504',
          'http://127.0.0.1:5504',
          /^http:\/\/10\.0\.0\.\d+:5503$/
        ],
        credentials: true
      }
    });

    // אחסן את מופע io לשימוש בבקרים
    app.set('io', io);

    // הגדרת CORS
    configureCors(app);

    // Middleware
    app.use(express.json());
    app.use((req, res, next) => {
      logger.info(`${req.method} ${req.path}`);
      next();
    });

    // נתיבי API
    app.use('/api/countries', countryRoutes);
    app.use('/api/auth', authRoutes);

    // טיפול בשגיאות
    app.use(errorHandler);

    // טיפול בחיבור WebSocket
    io.on('connection', (socket) => {
      logger.info('Client connected:', socket.id);

      socket.on('disconnect', () => {
        logger.info('Client disconnected:', socket.id);
      });
    });

    // הפעלת השרת
    const PORT = process.env.PORT || 5503;
    httpServer.listen(PORT, '0.0.0.0', () => {
      logger.info(`Server running on port ${PORT}`);
    });

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// מטפל בחריגים שלא נתפסו
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

// מטפל בדחיות הבטחות ללא טיפול
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection:', err);
  process.exit(1);
});

export { app };



/*

הקובץ index.js מגדיר את ההגדרות הראשיות של השרת בעזרת Express ו-Socket.IO. הנה הסבר על החלקים השונים בקובץ:

הגדרת תלותים:

express: מאפשר יצירת אפליקציית שרת.
dotenv: לטעינת משתנים מקובץ .env.
http: מאפשר יצירת שרת HTTP.
socket.io: מאפשר תקשורת WebSocket בזמן אמת.
connectDB: פונקציה להתחברות למסד הנתונים.
configureCors: הגדרת CORS.
errorHandler: טיפול בשגיאות.
logger: רישום אירועים.
countryRoutes ו-authRoutes: נתיבי API עבור מדינות ואותנטיקציה.
הגדרת השרת:

השרת נוצר בעזרת express ו-http.createServer.
חיבור למסד הנתונים מתבצע בעזרת connectDB().
הגדרת WebSocket:

יצירת חיבור WebSocket בעזרת new Server(httpServer, {...}).
הגדרת CORS ל-WebSocket כך שהחיבורים יגיעו רק מכתובת URL ספציפית.
חיבור משתמשים ל-WebSocket ושמירה על החיבור באמצעות io.on('connection', ...).
טיפול בהתחברות והפסקת חיבור של משתמשים.
הגדרת מסלולים (Routes):

app.use('/api/countries', countryRoutes) – מסלול לטיפול במדינות.
app.use('/api/auth', authRoutes) – מסלול לטיפול באותנטיקציה.
הגדרת Middleware:

express.json() – מאפשר טיפול בבקשות JSON.
Middleware לרישום כל בקשה שנכנסת לשרת.
טיפול בשגיאות:

errorHandler לטיפול בשגיאות כלליות.
הפעלת השרת:

השרת מאזין על פורט שנשאב מתוך משתני הסביבה או 5503 ברירת מחדל.
טיפול בשגיאות קריטיות כמו uncaughtException ו-unhandledRejection.
הקובץ מציין את התחלת השרת, את הגדרת ה-WebSocket, את המסלולים השונים, ומוודא שהשרת פועל כראוי עם רישום שגיאות וניהול חיבורים בזמן אמת.

*/