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
