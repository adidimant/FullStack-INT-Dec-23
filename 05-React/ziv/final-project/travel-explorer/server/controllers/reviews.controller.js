import Review from '../models/Review.js';
import { logger } from '../utils/logger.js';

export const createReview = async (req, res) => {
  try {
    // Create a new review
    const review = new Review(req.body);
    await review.save();
    
    // Log successful creation
    logger.info(`Review created: ${review._id}`);
    
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
    // Fetch the latest 100 reviews
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
    // Increment the likes count of a review
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Emit the updated review through Socket.IO
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
