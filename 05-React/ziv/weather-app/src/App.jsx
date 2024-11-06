/* App.js: Manages overall app state, including location permission and city search,
 and integrates conditional rendering and API handling. 
 Implements localStorage for persisting last search and advanced performance optimizations..*/


import React, { useState, useEffect, lazy, Suspense } from 'react';
import useWeatherData from './hooks/useWeatherData';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import axios from 'axios';
import './styles/App.css';

const AdvancedWeatherDetails = lazy(() => import('./pages/AdvancedWeatherDetails'));

const App = () => {
  const [city, setCity] = useState('');
  const [locationPermission, setLocationPermission] = useState(null);
  const { weather, loading, error } = useWeatherData(city || 'Tel-Aviv');
  const [suggestions, setSuggestions] = useState([]);
  const [notFoundError, setNotFoundError] = useState(null);

  useEffect(() => {
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 6 && currentHour < 18;

    document.body.classList.add(isDayTime ? 'day-background' : 'night-background');
    return () => document.body.classList.remove('day-background', 'night-background');
  }, []);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const cacheKey = `${latitude},${longitude}`;
          const cachedCity = localStorage.getItem(cacheKey);

          if (cachedCity) {
            setCity(cachedCity);
            return;
          }

          try {
            const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
            if (response.ok) {
              const data = await response.json();
              const detectedCity = data.city || 'Tel-Aviv';
              setCity(detectedCity);
              localStorage.setItem(cacheKey, detectedCity);
            } else {
              throw new Error('Geocode service is throttled or unavailable.');
            }
          } catch (err) {
            console.error("Error fetching location data:", err);
            setCity('Tel-Aviv');
          }
        },
        () => {
          setCity('Tel-Aviv');
        }
      );
    };

    if (locationPermission === null) {
      const confirmLocation = window.confirm("Do you allow access to your location?");
      if (confirmLocation) {
        setLocationPermission(true);
        getLocation();
      } else {
        setLocationPermission(false);
        setCity('Tel-Aviv');
      }
    }
  }, [locationPermission]);

  useEffect(() => {
    if (city.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(`https://api.teleport.org/api/cities/?search=${city}`);
          const results = response.data._embedded['city:search-results'];
          setNotFoundError(results.length === 0 ? "City not found. Please try another city." : null);
          setSuggestions(results);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
          setSuggestions([]);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const handleSearch = () => {
    if (city) {
      setCity(city);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.matching_full_name);
    setSuggestions([]);
    setNotFoundError(null);
  };

  const handleRetry = () => {
    const lastSavedCity = localStorage.getItem('lastCity') || 'Tel-Aviv';
    
    // Temporarily clear city to ensure component re-renders
    setCity('');
    setTimeout(() => {
      setCity(lastSavedCity); // Set it back to last saved city
    }, 0); // Small delay to ensure re-render
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={setCity} />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.matching_full_name}
            </li>
          ))}
        </ul>
      )}
      {notFoundError && <p className="error-message">{notFoundError}</p>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <WeatherDisplay weather={weather} error={error} onRetry={handleRetry} />
      )}
    </div>
  );
};

export default App;
