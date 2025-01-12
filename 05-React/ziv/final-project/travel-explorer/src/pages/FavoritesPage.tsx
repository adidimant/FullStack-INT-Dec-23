import { CountryCard } from '../components/shared/CountryCard';
import { useStore } from '../store/useStore';
import { countries } from '../data/countries';

export const FavoritesPage = () => {
  const favorites = useStore((state) => state.favorites);
  const favoriteCountries = countries.filter((country) =>
    favorites.includes(country.id)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorites</h1>
      {favoriteCountries.length === 0 ? (
        <p className="text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};