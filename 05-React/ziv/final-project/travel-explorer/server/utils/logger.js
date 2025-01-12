import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logDir = path.join(__dirname, '../logs');

// ודא שקיימת ספריית יומנים
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logToFile = (type, message, details = null) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    type,
    message,
    details
  };

  const logFile = path.join(logDir, `${type}.log`);
  fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
};

export const logger = {
  info: (message, details = null) => {
    console.log(`[INFO] ${message}`, details || '');
    logToFile('info', message, details);
  },
  error: (message, error = null) => {
    console.error(`[ERROR] ${message}`, error || '');
    logToFile('error', message, {
      message: error?.message,
      stack: error?.stack,
      ...error
    });
  },
  debug: (message, details = null) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, details || '');
      logToFile('debug', message, details);
    }
  }
};

/*
מספק מערכת רישום (לוגים) לאירועים שונים באפליקציה:

יצירת ספריית לוגים: הקובץ בודק אם קיימת ספריית לוגים (logs) בתיקיית הפרויקט. אם לא, הוא יוצר אותה.

פונקציה logToFile: פונקציה זו אחראית על כתיבת רשומות הלוג לקובץ. היא יוצרת רשומה עם תאריך ושעה, סוג הלוג (למשל, info, error, debug), ההודעה, ופרטי שגיאה אם ישנם. כל רשומה נכתבת בסגנון JSON לקובץ הלוג המתאים.

אובייקט logger:

info: רושם הודעה מסוג "INFO" במסך ובקובץ הלוג.
error: רושם הודעה מסוג "ERROR" במסך ובקובץ הלוג, כולל פרטי שגיאה (אם קיימת).
debug: רושם הודעה מסוג "DEBUG" רק אם הסביבה היא development, במסך ובקובץ הלוג.
הקובץ משלב בין רישום למסך לבין שמירת הלוגים בקבצים כדי לאפשר ניתוח בעיות ומעקב אחרי פעולות המתרחשות במערכת.
*/