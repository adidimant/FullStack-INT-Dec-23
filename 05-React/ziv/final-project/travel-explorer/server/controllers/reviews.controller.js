import Review from '../models/Review.js';
import { logger } from '../utils/logger.js';

export const createReview = async (req, res) => {
  try {
    // הוספת פרטי המשתמש בלוג אם הם קיימים
    const userId = req.user ? req.user._id : 'Unknown User';
    const review = new Review(req.body);

    // שמירה של הביקורת
    await review.save();
    
    // לוג עם פרטי המשתמש וה-ID של הביקורת
    logger.info(`Review created by user ${userId}: ${review._id}`);
    
    // Emit the new review through Socket.IO
    req.app.get('io').emit('review-added', review);
    
    // Respond with the created review
    res.status(201).json(review);
  } catch (error) {
    logger.error('Error creating review:', error);
    res.status(500).json({ 
      message: 'Error creating review', 
      error: error.message 
    });
  }
};

export const getReviews = async (req, res) => {
  try {
    // אחזר את 100 הסקירות האחרונות
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .limit(100);
    
    res.json(reviews);
  } catch (error) {
    logger.error('Error fetching reviews:', error);
    res.status(500).json({ 
      message: 'Error fetching reviews', 
      error: error.message 
    });
  }
};

export const likeReview = async (req, res) => {
  try {
    // הוספת פרטי המשתמש בלוג אם הם קיימים
    const userId = req.user ? req.user._id : 'Unknown User';
    
    // הגדל את ספירת הלייקים של ביקורת
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // לוג עם פרטי המשתמש וה-ID של הביקורת
    logger.info(`Review liked by user ${userId}: ${review._id}`);
    
    // שלח את הביקורת המעודכנת דרך Socket.IO
    req.app.get('io').emit('review-updated', review);
    
    res.json(review);
  } catch (error) {
    logger.error('Error liking review:', error);
    res.status(500).json({ 
      message: 'Error liking review', 
      error: error.message 
    });
  }
};


/*

createReview:

יוצר ביקורת חדשה על פי הנתונים שנשלחים ב-req.body.
שומר את הביקורת במסד הנתונים.
שולח את הביקורת שנוצרה ללקוחות באמצעות Socket.IO.
מחזיר את הביקורת שנוצרה בתגובה.
getReviews:

שולף את 100 הביקורות האחרונות מהמסד הנתונים.
מחזיר את הביקורות שנשלפו בתגובה.
likeReview:

מגדיל את מספר הלייקים של ביקורת קיימת.
שולח את הביקורת המעודכנת ללקוחות באמצעות Socket.IO.
מחזיר את הביקורת המעודכנת בתגובה.
הקוד כולל טיפול בשגיאות, לוגים עם פרטי המשתמש (אם קיים), ושימוש ב-Socket.IO כדי לעדכן את הלקוחות בזמן אמת.

*/