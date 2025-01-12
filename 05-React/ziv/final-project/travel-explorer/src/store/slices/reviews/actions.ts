import { StateCreator } from 'zustand';
import { StoreState } from '../../types';
import { ReviewsState, ReviewsActions } from './types';

export const createReviewsActions: StateCreator<
  StoreState,
  [],
  [],
  ReviewsActions
> = (set, get) => ({
  addReview: (review) =>
    set((state) => ({
      reviews: [review, ...state.reviews],
    })),

  toggleLike: (reviewId) => {
    const state = get() as ReviewsState;
    const hasLiked = state.likedReviewIds.includes(reviewId);

    set((state) => ({
      reviews: state.reviews.map((review) =>
        review.id === reviewId
          ? { ...review, likes: review.likes + (hasLiked ? -1 : 1) }
          : review
      ),
      likedReviewIds: hasLiked
        ? state.likedReviewIds.filter(id => id !== reviewId)
        : [...state.likedReviewIds, reviewId],
    }));
  },

  hasLikedReview: (reviewId) => {
    const state = get() as ReviewsState;
    return state.likedReviewIds.includes(reviewId);
  },
});