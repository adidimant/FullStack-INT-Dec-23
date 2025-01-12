import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // זמן המתנה לחיבור לשרת
      socketTimeoutMS: 45000, // זמן המתנה לפעולה כלשהי על socket
      retryWrites: true, // ניסיון לכתוב מחדש במקרה של כשלון
      w: 'majority', // כתיבה ברוב הקול
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
    throw error; // חשוב להשליך את השגיאה כדי שלא יימשך התהליך
  }
};

export default connectDB;
