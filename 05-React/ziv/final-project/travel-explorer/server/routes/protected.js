import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

//מסלול מוגן
router.get('/dashboard', verifyToken, async (req, res) => {
  try {
    // גש למזהה המשתמש המאומת באמצעות req.userId
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

// מסלול פרופיל משתמש
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

// מסלול הגדרות משתמש
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

/*

הקוד מגדיר נתיבים מוגנים שדורשים אימות טוקן JWT (באמצעות verifyToken) כדי לגשת אליהם.

מה הקוד עושה:
נתיב /dashboard:

מוגן על ידי verifyToken, כלומר יש צורך באימות טוקן JWT כדי לגשת אליו.
ברגע שהמשתמש מאומת, המידע על המשתמש (ID) נשמר ב-req.userId ומוצג בתגובה.
אם יש שגיאה במהלך הגישה, תישלח הודעת שגיאה עם סטטוס 500.
נתיב /profile:

גם נתיב זה מוגן על ידי verifyToken.
המידע על המשתמש (ID) מוצג בתגובה.
אם יש שגיאה, תישלח הודעת שגיאה עם סטטוס 500.
נתיב /settings:

נתיב נוסף המוגן על ידי verifyToken.
המידע על המשתמש (ID) מוצג בתגובה.
אם יש שגיאה, תישלח הודעת שגיאה עם סטטוס 500.
מטרת הקוד:
הקוד מגדיר נתיבים מוגנים שדורשים אימות טוקן JWT. המידע של המשתמש (ID) נשמר ב-req.userId ומוצג בתגובה לכל אחד מהנתיבים.


*/