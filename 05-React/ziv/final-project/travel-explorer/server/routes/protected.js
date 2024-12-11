import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

// Protected route example
router.get('/dashboard', verifyToken, async (req, res) => {
  try {
    // Access the authenticated user's ID via req.userId
    logger.info('Dashboard accessed by user:', req.userId);
    res.json({ 
      message: 'Welcome to your dashboard',
      userId: req.userId
    });
  } catch (error) {
    logger.error('Dashboard access error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// User profile route
router.get('/profile', verifyToken, async (req, res) => {
  try {
    logger.info('Profile accessed by user:', req.userId);
    res.json({ 
      message: 'Profile data',
      userId: req.userId
    });
  } catch (error) {
    logger.error('Profile access error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// User settings route
router.get('/settings', verifyToken, async (req, res) => {
  try {
    logger.info('Settings accessed by user:', req.userId);
    res.json({ 
      message: 'User settings',
      userId: req.userId
    });
  } catch (error) {
    logger.error('Settings access error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;