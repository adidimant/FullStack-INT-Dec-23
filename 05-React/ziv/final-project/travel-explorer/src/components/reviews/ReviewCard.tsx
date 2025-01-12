import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Review } from '../../types/review.types';

interface ReviewCardProps {
  review: Review;
  onLike: (reviewId: string, userId: string) => void;
  userId: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, onLike, userId }) => {
  const hasLiked = Array.isArray(review.likedBy) && review.likedBy.includes(userId); // בדיקה אם likedBy הוא מערך

  const handleLikeClick = () => {
    onLike(review.id, userId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={review.photoUrl || 'https://via.placeholder.com/48'}
            alt={review.authorName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">
            {review.isAnonymous ? 'Anonymous' : review.authorName}
          </h3>
          <p className="text-sm text-gray-500">{review.state}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= review.rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 mb-4">{review.content}</p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <button
          onClick={handleLikeClick}
          className={`flex items-center space-x-1 transition-colors ${
            hasLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${hasLiked ? 'fill-current' : ''}`} />
          <span>{review.likes}</span>
        </button>
        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};
