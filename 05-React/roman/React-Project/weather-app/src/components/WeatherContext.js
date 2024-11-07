import React, { createContext, useState, useEffect } from 'react';
import getWeatherData from '../services/weatherService.js';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      getWeatherData(query)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [query]);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, query, setQuery }}>
      {children}
    </WeatherContext.Provider>
  );
};
