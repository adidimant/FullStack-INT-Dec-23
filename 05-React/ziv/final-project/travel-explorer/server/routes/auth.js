import express from 'express';
import { register, login, verifyToken } from '../controllers/auth/index.js';
import { validateRegistration, validateLogin } from '../middleware/validation.js';
import { rateLimiter } from '../middleware/rateLimiter.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

router.use(rateLimiter);

router.use((req, res, next) => {
  logger.info(`Auth route accessed: ${req.method} ${req.path}`);
  next();
});

router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);
router.post('/verify', verifyToken);

export default router;




