import { Review } from '../../../types/review.types';

export interface ReviewsState {
  reviews: Review[];
  likedReviewIds: string[];
}

export interface ReviewsActions {
  addReview: (review: Review) => void;
  toggleLike: (reviewId: string) => void;
  hasLikedReview: (reviewId: string) => boolean;
}

export type ReviewsSlice = ReviewsState & ReviewsActions;