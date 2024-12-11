import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logDir = path.join(__dirname, '../logs');

// Ensure logs directory exists
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