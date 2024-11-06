/*hooks/useWeatherData.js

Custom hook that handles data fetching from the wttr.in API, along with error handling and throttling.
Caches the last searched city in localStorage to allow retrieving previous data on app reloads.*/

import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherData = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchTime, setLastFetchTime] = useState(0);

  const fetchWeatherData = async (city) => {
    if (!city) return;

    const now = Date.now();
    if (now - lastFetchTime < 10000) { // Throttle: prevent requests within 10 seconds
      console.log('Fetch throttled. Please wait.');
      setError('Please wait a few seconds before trying again.');
      return;
    }

    setLoading(true);
    setError(null); // Clear previous error on new attempt
    setWeather(null); // Clear previous weather data on new search
    try {
      const response = await axios.get(`https://wttr.in/${city}?format=j1`);
      if (response.status === 200 && response.data) {
        setWeather(response.data);
        setLastFetchTime(now);
        localStorage.setItem('lastCity', city); // Save only after a successful API call
      } else {
        throw new Error("City not found or API issue.");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please enter a valid city name.');
      } else {
        setError('Network error or API unavailability. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchWeatherData(city);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [city]);

  return { weather, loading, error };
};

export default useWeatherData;
