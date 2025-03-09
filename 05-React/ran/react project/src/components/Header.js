import React, { memo } from 'react';
import { useWeather } from '../context/WeatherContext';
import './Header.css';

const Header = () => {
  const { location, weatherData } = useWeather();
  
  // Get current date and time
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="header">
      <div className="header-content">
        <h1>Weather Forecast</h1>
        {location && (
          <div className="location-info">
            <h2>{location}</h2>
            <p className="date">{currentDate}</p>
            {weatherData?.current_condition?.[0]?.weatherDesc?.[0]?.value && (
              <p className="weather-description">
                {weatherData.current_condition[0].weatherDesc[0].value}
              </p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(Header);
