import { logger } from './logger.js';

export const logDBEvent = (event, details = null) => {
  switch (event) {
    case 'connected':
      logger.info('MongoDB connected successfully');
      break;
    case 'error':
      logger.error('MongoDB connection error:', details);
      break;
    case 'disconnected':
      console.warn('MongoDB disconnected');
      break;
    case 'reconnected':
      logger.info('MongoDB reconnected');
      break;
    default:
      logger.info(`MongoDB event: ${event}`, details);
  }
};

/*
הפונקציה `logDBEvent` רושמת לוגים עבור אירועים הקשורים למסד הנתונים MongoDB, כמו חיבור מוצלח, שגיאות, ניתוק או חיבור מחדש. היא משתמשת במודול `logger` כדי לרשום את האירועים ברמות לוג שונות, ומאפשרת להוסיף פרטים נוספים אם יש צורך.
*/