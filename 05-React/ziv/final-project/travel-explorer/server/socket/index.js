import { Server } from 'socket.io';
import { logger } from '../utils/logger.js';
import { handleReviews } from './handlers/reviewHandler.js';

export const createSocketServer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: [
        'http://localhost:5503',
        'http://127.0.0.1:5503',
        /^http:\/\/10\.0\.0\.\d+:5503$/,
        'http://localhost:5504/',
        'http://127.0.0.1:5504',
        /^http:\/\/10\.0\.0\.\d+:5504$/,
      ],
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    logger.info('Client connected:', socket.id);
    
    // הגדר מטפלי ביקורת
    handleReviews(io, socket);

    socket.on('disconnect', () => {
      logger.info('Client disconnected:', socket.id);
    });
  });

  return io;
};

/*
הקוד הזה יוצר שרת Socket.IO שמאזין לחיבורים ומבצע פעולות בזמן אמת כמו עדכון חוות דעת. הוא מאפשר חיבורים מדומיינים שונים ומוודא שהלקוחות יכולים לשלוח ולקבל עדכונים תוך שמירה על אבטחת CORS וקרדנציאלים.
*/