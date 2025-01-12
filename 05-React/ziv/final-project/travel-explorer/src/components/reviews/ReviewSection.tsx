import React, { useState } from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';
import { Review } from '../../types/review.types';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';

interface ReviewSectionProps {
  reviews: Review[];
  countryId: string;
  onAddReview: (review: Omit<Review, 'id' | 'likes' | 'likedBy' | 'createdAt'>) => Promise<void>;
}

export const ReviewSection = ({ reviews, countryId, onAddReview }: ReviewSectionProps) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    try {
      await onAddReview({
        authorName: user.name,
        isAnonymous: false,
        state: '',
        content,
        rating,
        photoUrl: '',
        countryId
      });
      setContent('');
      setRating(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {user && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
          <div className="mb-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      value <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your experience..."
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4"
          >
            Post Review
          </Button>
        </form>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {review.authorName[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{review.authorName}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.content}</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful ({review.likes})</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-red-600">
                <Flag className="w-4 h-4" />
                <span>Report</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};