import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/database.js';
import corsMiddleware from './middleware/cors.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './utils/logger.js';
import authRoutes from './routes/auth.js';
import countryRoutes from './routes/countries.js';
import userRoutes from './routes/users.js';
import protectedRoutes from './routes/protected.js';
import { verifyToken } from './middleware/auth.js';

dotenv.config();

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    const app = express();
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
      cors: {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        credentials: true
      }
    });

    // Request logging middleware
    app.use((req, res, next) => {
      logger.info(`${req.method} ${req.path}`);
      next();
    });

    // Middleware
    app.use(corsMiddleware);
    app.use(express.json());

    // Public routes
    app.use('/api/auth', authRoutes);
    app.use('/api/countries', countryRoutes);

    // Protected routes
    app.use('/api/users', verifyToken, userRoutes);
    app.use('/api/protected', protectedRoutes);

    // Error handling middleware
    app.use(errorHandler);

    // WebSocket connection handling
    io.on('connection', (socket) => {
      logger.info('User connected:', socket.id);

      socket.on('join-country', (countryId) => {
        socket.join(countryId);
        logger.debug('User joined country room:', { socketId: socket.id, countryId });
      });

      socket.on('leave-country', (countryId) => {
        socket.leave(countryId);
        logger.debug('User left country room:', { socketId: socket.id, countryId });
      });

      socket.on('new-review', (data) => {
        logger.debug('New review received:', data);
        io.to(data.countryId).emit('review-added', data);
      });

      socket.on('disconnect', () => {
        logger.info('User disconnected:', socket.id);
      });
    });

    const PORT = process.env.PORT || 3000;
    httpServer.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection:', err);
  process.exit(1);
});