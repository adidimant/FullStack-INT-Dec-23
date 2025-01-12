import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

 // קבל פרופיל משתמש
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
});

// עדכן את פרופיל המשתמש
router.put('/profile', verifyToken, async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
});

// קבל מועדפים של משתמשים
router.get('/favorites', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('favorites');
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching favorites', error: error.message });
  }
});

// הוסף למועדפים
router.post('/favorites/:countryId', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.favorites.includes(req.params.countryId)) {
      user.favorites.push(req.params.countryId);
      await user.save();
    }
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to favorites', error: error.message });
  }
});

// הסר מהמועדפים
router.delete('/favorites/:countryId', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.favorites = user.favorites.filter(id => id !== req.params.countryId);
    await user.save();
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Error removing from favorites', error: error.message });
  }
});

export default router;

/*
הקובץ server/routes/users.js הוא קובץ המגדיר את כל המסלולים (routes) הקשורים למשתמשים בשרת. להלן הסבר מתומצת על כל מסלול:

GET /profile:

מבצע חיפוש על פי מזהה המשתמש (הנמצא ב-req.user.id שנשלח עם הטוקן).
מחזיר את פרטי המשתמש (ללא הסיסמה) כתגובה.
אם יש שגיאה, מחזיר הודעת שגיאה עם קוד 500.
PUT /profile:

מאפשר למשתמש לעדכן את שמו וכתובת הדוא"ל שלו.
אם השינוי מצליח, מחזיר את פרטי המשתמש המעודכנים (ללא הסיסמה).
אם יש שגיאה, מחזיר הודעת שגיאה עם קוד 500.
GET /favorites:

מחזיר את רשימת המקומות המועדפים של המשתמש.
אם יש שגיאה, מחזיר הודעת שגיאה עם קוד 500.
POST /favorites/:countryId:

מוסיף מדינה לרשימת המועדפים של המשתמש.
אם המדינה לא קיימת כבר ברשימה, היא מתווספת.
מחזיר את רשימת המועדפים המעודכנת.
אם יש שגיאה, מחזיר הודעת שגיאה עם קוד 500.
DELETE /favorites/:countryId:

מסיר מדינה מרשימת המועדפים של המשתמש.
מחזיר את רשימת המועדפים המעודכנת לאחר ההסרה.
אם יש שגיאה, מחזיר הודעת שגיאה עם קוד 500.
סיכום:
הקובץ מגדיר את כל הפעולות שניתן לבצע על פרופיל המשתמש (הצגת פרופיל, עדכון פרופיל) ורשימת המועדפים (הוספה, הסרה). כל הפעולות מגינות באמצעות middleware verifyToken לוודא שהמשתמש מחובר ומורשה לבצע את הפעולה.
*/