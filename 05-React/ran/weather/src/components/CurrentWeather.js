import React, { memo } from 'react';
import { useWeather } from '../context/WeatherContext';
import { 
  formatTemperature, 
  formatSpeed, 
  formatDistance,
  getCurrentConditions
} from '../utils/formatters';
import { FiWind, FiDroplet, FiEye } from 'react-icons/fi';
import './CurrentWeather.css';

const CurrentWeather = () => {
  const { weatherData, units, isLoading, error } = useWeather();
  
  // Get current conditions from weather data
  const currentConditions = weatherData ? getCurrentConditions(weatherData) : null;
  
  // If loading, show loading state
  if (isLoading) {
    return (
      <div className="current-weather-container loading">
        <div className="loading-spinner"></div>
        <p>Loading weather data...</p>
      </div>
    );
  }
  
  // If error, show error message
  if (error) {
    return (
      <div className="current-weather-container error">
        <p className="error-message">{error}</p>
      </div>
    );
  }
  
  // If no data, show empty state
  if (!currentConditions) {
    return (
      <div className="current-weather-container empty">
        <p>Search for a location to see weather information</p>
      </div>
    );
  }
  
  // Get weather icon URL
  const weatherIconUrl = currentConditions.weatherIconUrl?.[0]?.value;
  
  return (
    <div className="current-weather-container">
      <div className="current-weather-card">
        <div className="current-weather-main">
          <div className="temperature-container">
            <h2 className="temperature">
              {formatTemperature(currentConditions.temp_C, units.temperature)}
            </h2>
            <p className="feels-like">
              Feels like {formatTemperature(currentConditions.FeelsLikeC, units.temperature)}
            </p>
          </div>
          
          <div className="weather-icon-container">
            {weatherIconUrl && (
              <img 
                src={weatherIconUrl} 
                alt={currentConditions.weatherDesc?.[0]?.value || 'Weather icon'} 
                className="weather-icon"
              />
            )}
            <p className="weather-description">
              {currentConditions.weatherDesc?.[0]?.value || 'Unknown'}
            </p>
          </div>
        </div>
        
        <div className="current-weather-details">
          <div className="detail-item">
            <FiWind className="detail-icon" />
            <div className="detail-info">
              <span className="detail-label">Wind</span>
              <span className="detail-value">
                {formatSpeed(currentConditions.windspeedKmph, units.distance)}
              </span>
            </div>
          </div>
          
          <div className="detail-item">
            <FiDroplet className="detail-icon" />
            <div className="detail-info">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{currentConditions.humidity}%</span>
            </div>
          </div>
          
          <div className="detail-item">
            <FiEye className="detail-icon" />
            <div className="detail-info">
              <span className="detail-label">Visibility</span>
              <span className="detail-value">
                {formatDistance(currentConditions.visibility, units.distance)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(CurrentWeather);
