import React, { useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { countries } from '../../data/countries';
import { useClickOutside } from '../../hooks/useClickOutside';
import { FavoriteItem } from '././FavoriteItem';
import { EmptyFavorites } from '././EmptyFavorites';

export const FavoritesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { favorites, removeFavorite } = useStore();
  
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const favoriteCountries = countries.filter(country => 
    favorites.includes(country.id)
  );

  const handleRemove = (e: React.MouseEvent, countryId: string) => {
    e.preventDefault();
    e.stopPropagation();
    removeFavorite(countryId);
  };

 const handleClose = () => setIsOpen(false);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-200 hover:text-white transition-colors"
      >
        <Heart
          className={`w-5 h-5 ${favorites.length > 0 ? 'fill-current text-red-500' : ''}`}
        />
        <span className="text-sm">{favorites.length}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl overflow-hidden z-50">
          <div className="p-3 bg-gray-50 border-b border-gray-200">
            <h3 className="font-semibold text-gray-700">Favorite Destinations</h3>
          </div>

          {favoriteCountries.length === 0 ? (
            <EmptyFavorites />
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {favoriteCountries.map(country => (
                <FavoriteItem
                  key={country.id}
                  country={country}
                  onRemove={handleRemove}
                  onSelect={handleClose}
                />
              ))}
            </div>
          )}

          <div className="p-3 bg-gray-50 border-t border-gray-200">
            <Link
              to="/favorites"
              className="block text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              onClick={handleClose}
            >
              View All Favorites
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};