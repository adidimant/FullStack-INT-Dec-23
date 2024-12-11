import express from 'express';
import { register, login, verifyToken } from '../controllers/authController.js';
import { validateRegistration, validateLogin } from '../middleware/validation.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Apply rate limiting to auth routes
router.use(rateLimiter);

// Auth routes
router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);
router.post('/verify', verifyToken);

export default router;