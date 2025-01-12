import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // זמן המתנה לחיבור לשרת
      socketTimeoutMS: 45000, // זמן המתנה לפעולה כלשהי על socket
      retryWrites: true, 
      w: 'majority', 
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      logger.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      logger.info('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      logger.info('MongoDB reconnected');
    });

    return conn;
  } catch (error) {
    logger.error('MongoDB Connection Error:', error);
    throw error; 
  }
};

export default connectDB;

/*
הקוד אחראי על חיבור השרת למסד הנתונים MongoDB ומטפל באירועים שונים הקשורים לחיבור.

פונקציות עיקריות:
connectDB:

פונקציה אסינכרונית שמתחברת ל-MongoDB באמצעות mongoose.connect.
משתמשת במשתנה סביבה MONGODB_URI ככתובת החיבור.
כוללת הגדרות נוספות כמו:
serverSelectionTimeoutMS: זמן המתנה מקסימלי לבחירת שרת.
socketTimeoutMS: זמן המתנה לפעולה ב-socket.
retryWrites: ניסיון לכתוב מחדש במקרה של כישלון.
w: 'majority': מבטיח כתיבה ברוב המקרים.
טיפול באירועים:

mongoose.connection.on('error'): רישום שגיאות חיבור.
mongoose.connection.on('disconnected'): טיפול בניתוק החיבור.
mongoose.connection.on('reconnected'): טיפול בחיבור מחדש.
שימוש ב-Logger:

נרשמות הודעות על חיבור מוצלח, ניתוק, או שגיאה, בעזרת logger.
מטרות עיקריות:
להבטיח שהחיבור ל-MongoDB יציב וניטור אירועים קריטיים.
לספק מידע דיאגנוסטי על מצב החיבור ל-MongoDB.
*/