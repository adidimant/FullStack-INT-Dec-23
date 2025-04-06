import React, { useState, useCallback, memo } from 'react';
import { useWeather } from '../context/WeatherContext';
import useWeatherApi from '../hooks/useWeatherApi';
import useGeolocation from '../hooks/useGeolocation';
import './SearchForm.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const { searchType, setSearchType } = useWeather();
  const { fetchWeatherByQuery, fetchWeatherByLocation, isLoading } = useWeatherApi();
  const { coordinates, error: locationError, getPosition, loaded } = useGeolocation();

  // Handle search type change
  const handleSearchTypeChange = useCallback((e) => {
    setSearchType(e.target.value);
  }, [setSearchType]);

  // Handle query change
  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (searchType === 'query' && query.trim()) {
      await fetchWeatherByQuery(query.trim());
    } else if (searchType === 'location') {
      getPosition();
    }
  }, [searchType, query, fetchWeatherByQuery, getPosition]);

  // Fetch weather data when coordinates change
  React.useEffect(() => {
    if (searchType === 'location' && loaded && coordinates.lat && coordinates.lng) {
      fetchWeatherByLocation(coordinates.lat, coordinates.lng);
    }
  }, [searchType, coordinates, loaded, fetchWeatherByLocation]);

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-type-toggle">
          <label className={`search-type-option ${searchType === 'query' ? 'active' : ''}`}>
            <input
              type="radio"
              name="searchType"
              value="query"
              checked={searchType === 'query'}
              onChange={handleSearchTypeChange}
            />
            <span>Search by City</span>
          </label>
          <label className={`search-type-option ${searchType === 'location' ? 'active' : ''}`}>
            <input
              type="radio"
              name="searchType"
              value="location"
              checked={searchType === 'location'}
              onChange={handleSearchTypeChange}
            />
            <span>Use My Location</span>
          </label>
        </div>
        
        {searchType === 'query' ? (
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Enter city name (e.g., Tel-Aviv, London)"
              value={query}
              onChange={handleQueryChange}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="search-button"
              disabled={isLoading || !query.trim()}
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        ) : (
          <div className="location-button-container">
            <button 
              type="submit" 
              className="location-button"
              disabled={isLoading}
            >
              {isLoading ? 'Getting Location...' : 'Get My Location'}
            </button>
            {locationError && (
              <p className="error-message">
                Error: {locationError}
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(SearchForm);
