import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { Country } from '../../types';
import { useStore } from '../../store/useStore';

interface CountryCardProps {
  country: Country;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { favorites, addFavorite, removeFavorite } = useStore();
  const isFavorite = favorites.includes(country.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(country.id);
    } else {
      addFavorite(country.id);
    }
  };

  return (
    <Link
      to={`/country/${country.id}`}
      className="group block bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <button
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isFavorite ? 'bg-red-500' : 'bg-white/80'
          } backdrop-blur-sm transition-colors`}
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? 'text-white' : 'text-gray-600'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{country.name}</h3>
            <div className="flex items-center space-x-1 text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{country.capital}</span>
            </div>
          </div>
          <img
            src={country.flagUrl}
            alt={`${country.name} flag`}
            className="w-8 h-6 rounded shadow-sm"
          />
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {country.description}
        </p>
        {country.seasons && country.seasons.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {country.seasons.slice(0, 2).map((season) => (
              <span
                key={season.name}
                className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
              >
                {season.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};