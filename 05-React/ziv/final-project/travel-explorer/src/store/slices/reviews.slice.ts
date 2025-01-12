import { StateCreator } from 'zustand';
import { StoreState } from '../types';
import { Review } from '../../types/review.types';

export interface ReviewsSlice {
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
  addReview: (review: Review) => void;
  likeReview: (reviewId: string, userId: string) => void;
}

export const createReviewsSlice: StateCreator<
  StoreState,
  [],
  [],
  ReviewsSlice
> = (set) => ({
  reviews: JSON.parse(localStorage.getItem('travel-store') || '[]'), // קריאה מ-localStorage
  setReviews: (reviews) => {
    localStorage.setItem('travel-store', JSON.stringify(reviews)); // שמירה ב-localStorage
    set({ reviews });
  },
  addReview: (review) =>
    set((state) => {
      const updatedReviews = [review, ...state.reviews];
      localStorage.setItem('travel-store', JSON.stringify(updatedReviews)); // שמירה ב-localStorage
      return { reviews: updatedReviews };
    }),
  likeReview: (reviewId, userId) =>
    set((state) => {
      const updatedReviews = state.reviews.map((review) => {
        if (review.id === reviewId) {
          const hasLiked = review.likedBy.includes(userId);
          return {
            ...review,
            likes: hasLiked ? review.likes - 1 : review.likes + 1,
            likedBy: hasLiked
              ? review.likedBy.filter((id) => id !== userId)
              : [...review.likedBy, userId],
          };
        }
        return review;
      });
      localStorage.setItem('travel-store', JSON.stringify(updatedReviews)); // שמירה ב-localStorage
      return { reviews: updatedReviews };
    }),
});
