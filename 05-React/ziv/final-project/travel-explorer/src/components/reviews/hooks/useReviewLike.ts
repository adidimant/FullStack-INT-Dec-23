import { useCallback } from 'react';
import { useStore } from '../../../store/useStore';

export const useReviewLike = (reviewId: string, userId: string) => {
  const likeReview = useStore((state) => state.likeReview);

  const handleToggleLike = useCallback(() => {
    likeReview(reviewId, userId);
  }, [likeReview, reviewId, userId]);

  return {
    handleToggleLike,
  };
};
