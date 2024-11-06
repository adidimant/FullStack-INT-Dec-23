/*context/WeatherContext.js

Manages and provides temperature and distance units across the application.
Offers toggleTempUnit and toggleDistanceUnit functions for users to switch between Celsius/Fahrenheit and KMs/Miles.*/


import React, { createContext, useState, useCallback } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [unit, setUnit] = useState({ temp: 'Celsius', distance: 'KMs' });

  const toggleTempUnit = useCallback(() => {
    setUnit((prevUnit) => ({
      ...prevUnit,
      temp: prevUnit.temp === 'Celsius' ? 'Fahrenheit' : 'Celsius'
    }));
  }, []);

  const toggleDistanceUnit = useCallback(() => {
    setUnit((prevUnit) => ({
      ...prevUnit,
      distance: prevUnit.distance === 'KMs' ? 'Miles' : 'KMs'
    }));
  }, []);

  return (
    <WeatherContext.Provider value={{ unit, toggleTempUnit, toggleDistanceUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};