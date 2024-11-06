/* pages/HomePage.jsx

Manages the initial city state using the last city stored in localStorage and displays search and weather results.
Provides fallback search input on error, allowing users to re-search for a valid city.*/


import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import useWeatherData from '../hooks/useWeatherData';

const HomePage = () => {
  const lastCity = localStorage.getItem('lastCity') || 'Tel-Aviv';
  const [city, setCity] = useState(lastCity);
  const { weather, loading, error } = useWeatherData(city);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <h1>Weather App</h1>
      {/* Render SearchBar and let users enter a city on the error screen */}
      <SearchBar onSearch={handleSearch} />
      {loading && <div>Loading...</div>}

      {/* Display the custom error screen with city input */}
      {error && !loading ? (
        <div className="error-screen">
          <p>{error}</p>
          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button onClick={() => handleSearch(city)}>Search</button>
        </div>
      ) : (
        weather && <WeatherDisplay weather={weather} />
      )}
    </div>
  );
};

export default HomePage;
