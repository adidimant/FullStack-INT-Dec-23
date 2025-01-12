import { Plus } from 'lucide-react';

interface ReviewsHeaderProps {
  onAddClick: () => void;
}

export const ReviewsHeader = ({ onAddClick }: ReviewsHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Travel Reviews</h1>
      <button
        onClick={onAddClick}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-5 h-5" />
        Add Review
      </button>
    </div>
  );
};