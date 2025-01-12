import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import { ReviewForm } from '../components/reviews/ReviewForm';
import { ReviewCard } from '../components/reviews/ReviewCard';
import { ReviewFormData } from '../types/review.types';

export const ReviewsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { reviews, addReview, likeReview } = useStore();
  const userId = 'currentUserId'; 
  const countryId = 'IL'; 

  const handleSubmit = (formData: ReviewFormData) => {
    const newReview = {
      ...formData,
      id: Date.now().toString(),
      likes: 0,
      likedBy: [],
      createdAt: new Date().toISOString(),
    };
    addReview(newReview);
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Travel Reviews</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Review
        </button>
      </div>

      {isFormOpen && (
        <ReviewForm
          countryId={countryId} 
          onSubmit={handleSubmit}
          onClose={() => setIsFormOpen(false)}
        />
      )}

      <div className="grid gap-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No reviews yet. Be the first to share your experience!
          </p>
        ) : (
          reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              onLike={likeReview}
              userId={userId}
            />
          ))
        )}
      </div>
    </div>
  );
};
