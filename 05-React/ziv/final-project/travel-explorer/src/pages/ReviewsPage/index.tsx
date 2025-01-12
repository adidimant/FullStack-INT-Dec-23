import { ReviewsHeader } from './components/ReviewsHeader';
import { ReviewsList } from './components/ReviewsList';
import { ReviewForm } from '../../components/reviews/ReviewForm';
import { useReviews } from './hooks/useReviews';

export const ReviewsPage = () => {
  const {
    reviews,
    isFormOpen,
    openForm,
    closeForm,
    handleSubmit,
    handleLike,
  } = useReviews();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ReviewsHeader onAddClick={openForm} />
      
      {isFormOpen && (
        <ReviewForm
          onSubmit={handleSubmit}
          onClose={closeForm}
        />
      )}

      <ReviewsList
        reviews={reviews}
        onLike={handleLike}
      />
    </div>
  );
};