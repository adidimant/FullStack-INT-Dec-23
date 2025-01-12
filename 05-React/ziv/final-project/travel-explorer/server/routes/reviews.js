import express from 'express';
import { createReview, getReviews, likeReview } from '../controllers/reviews.controller.js';

const router = express.Router();

router.post('/', createReview);
router.get('/', getReviews);
router.post('/:id/like', likeReview);

export default router;


/*
הקוד מגדיר נתיבים (routes) עבור פעולות שונות הקשורות לביקורות (reviews) במערכת.

מה הקוד עושה:
נתיב POST /:

נקרא לפונקציה createReview כדי ליצור ביקורת חדשה.
הלקוח שולח את פרטי הביקורת בגוף הבקשה (request body).
נתיב GET /:

נקרא לפונקציה getReviews כדי לקבל את כל הביקורות.
הלקוח מקבל את כל הביקורות שנשמרו במערכת.
נתיב POST /:id/like:

נקרא לפונקציה likeReview כדי לאהוב ביקורת מסוימת.
הלקוח שולח את מזהה הביקורת (id) בכתובת ה-URL, והפעולה מעדכנת את מספר הלייקים של הביקורת הספציפית.
מטרת הקוד:
הקוד מגדיר נתיבים לביצוע פעולות שונות על ביקורות:

יצירת ביקורת חדשה.
קבלת כל הביקורות.
הוספת לייק לביקורת ספציפית.
*/