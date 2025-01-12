import { ReviewCard } from '../../../components/reviews/ReviewCard';
import { Review } from '../../../types/review.types';

interface ReviewsListProps {
  reviews: Review[];
  onLike: (reviewId: string) => void;
  userId: string; // הוספת userId לפרופס
}

export const ReviewsList = ({ reviews, onLike, userId }: ReviewsListProps) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          onLike={onLike}
          userId={userId} // מעביר את userId כפרופס
        />
      ))}
    </div>
  );
};
