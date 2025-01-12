import React from 'react';
import { Minus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Country } from '../../types';

interface FavoriteItemProps {
  country: Country;
  onRemove: (e: React.MouseEvent, countryId: string) => void;
  onSelect: () => void;
}

export const FavoriteItem = ({ country, onRemove, onSelect }: FavoriteItemProps) => {
  return (
    <Link
      to={`/country/${country.id}`}
      className="block hover:bg-gray-50 transition-colors group"
      onClick={onSelect}
    >
      <div className="flex items-center p-3 space-x-3">
        <div className="w-12 h-12 flex-shrink-0">
          <img
            src={country.imageUrl}
            alt={country.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 truncate">
            {country.name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {country.capital}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => onRemove(e, country.id)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
            title="Remove from favorites"
          >
            <Minus className="w-4 h-4" />
          </button>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
        </div>
      </div>
    </Link>
  );
};