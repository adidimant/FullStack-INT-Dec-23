import { useState, useCallback, useEffect } from 'react';
import { ReviewFormData } from '../../../types/review.types';
import * as reviewsApi from '../../../services/api/reviews.api';
import { useStore } from '../../../store/useStore';

export const useReviews = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { reviews, setReviews, addReview, likeReview } = useStore();

  // Fetch reviews and subscribe to real-time updates
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await reviewsApi.getReviews();
        setReviews(reviews);
      } catch (err) {
        setError('Failed to load reviews');
        console.error('Error fetching reviews:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();

    // Subscribe to real-time updates
    const unsubscribe = reviewsApi.subscribeToReviews((review) => {
      addReview(review);
    });

    return () => {
      unsubscribe();
    };
  }, [setReviews, addReview]);

  const handleSubmit = useCallback(async (formData: ReviewFormData) => {
    try {
      const review = await reviewsApi.createReview(formData);
      addReview(review);
      setIsFormOpen(false);
    } catch (err) {
      setError('Failed to create review');
      console.error('Error creating review:', err);
    }
  }, [addReview]);

  const handleLike = useCallback(async (reviewId: string) => {
    try {
      const updatedReview = await reviewsApi.likeReview(reviewId);
      likeReview(reviewId, updatedReview.likes);
    } catch (err) {
      console.error('Error liking review:', err);
    }
  }, [likeReview]);

  return {
    reviews,
    isLoading,
    error,
    isFormOpen,
    openForm: () => setIsFormOpen(true),
    closeForm: () => setIsFormOpen(false),
    handleSubmit,
    handleLike,
  };
};