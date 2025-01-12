import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/database.js';
import { configureCors } from './middleware/cors.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './utils/logger.js';
import countryRoutes from './routes/countryRoutes.js';
import authRoutes from './routes/auth.js'; // הוסף את זה

dotenv.config();

const app = express();
const httpServer = createServer(app);

const startServer = async () => {
  try {
    await connectDB();

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

    app.set('io', io); // Store io instance on app for use in controllers

    // Configure CORS
    configureCors(app);

    // Middleware
    app.use(express.json());
    app.use((req, res, next) => {
      logger.info(`${req.method} ${req.path}`);
      next();
    });

    // Routes
    app.use('/api/countries', countryRoutes); // נתיב למדינות
    app.use('/api/auth', authRoutes); // הוסף את הנתיב הזה עבור auth

    // Error handling middleware
    app.use(errorHandler);

    // WebSocket connection handling
    io.on('connection', (socket) => {
      logger.info('Client connected:', socket.id);

      socket.on('disconnect', () => {
        logger.info('Client disconnected:', socket.id);
      });
    });

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

export { app };
