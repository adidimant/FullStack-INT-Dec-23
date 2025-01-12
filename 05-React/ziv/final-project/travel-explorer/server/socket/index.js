import { Server } from 'socket.io';
import { logger } from '../utils/logger.js';
import { handleReviews } from './handlers/reviewHandler.js';

export const createSocketServer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: [
        'http://localhost:5503',
        'http://127.0.0.1:5503',
        /^http:\/\/10\.0\.0\.\d+:5503$/
      ],
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    logger.info('Client connected:', socket.id);
    
    // Set up review handlers
    handleReviews(io, socket);

    socket.on('disconnect', () => {
      logger.info('Client disconnected:', socket.id);
    });
  });

  return io;
};