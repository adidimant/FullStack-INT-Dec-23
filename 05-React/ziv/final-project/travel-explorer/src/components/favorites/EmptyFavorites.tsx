import { Heart } from 'lucide-react';

export const EmptyFavorites = () => {
  return (
    <div className="p-4 text-center text-gray-500">
      <Heart className="w-6 h-6 mx-auto mb-2 stroke-current" />
      <p>No favorite destinations yet</p>
      <p className="text-sm mt-1">
        Click the heart icon on any destination to add it to your favorites
      </p>
    </div>
  );
};