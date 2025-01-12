import authRoutes from './auth.js';
import userRoutes from './users.js';
import protectedRoutes from './protected.js';
import reviewRoutes from './reviews.js';
import { verifyToken } from '../middleware/auth.js';

export const setupRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/countries', countryRoutes);
  app.use('/api/users', verifyToken, userRoutes);
  app.use('/api/protected', protectedRoutes);
  app.use('/api/reviews', reviewRoutes);
};