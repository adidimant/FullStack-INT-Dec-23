import express from 'express';
import { createReview, getReviews, likeReview } from '../controllers/reviews.controller.js';

const router = express.Router();

router.post('/', createReview);
router.get('/', getReviews);
router.post('/:id/like', likeReview);

export default router;
