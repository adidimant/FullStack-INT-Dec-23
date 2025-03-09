import React, { memo } from 'react';
import { useWeather } from '../context/WeatherContext';
import { 
  formatTemperature, 
  formatDate,
  getDayOfWeek,
  getDailyForecast
} from '../utils/formatters';
import './DailyForecast.css';

const DailyForecast = () => {
  const { weatherData, units } = useWeather();
  
  // Get daily forecast from weather data
  const dailyForecast = weatherData ? getDailyForecast(weatherData) : [];
  
  // If no data or less than 2 days, don't render
  // (because the current day is already shown in CurrentWeather)
  if (!weatherData || dailyForecast.length < 2) {
    return null;
  }
  
  return (
    <div className="daily-forecast-container">
      <h3 className="daily-forecast-title">Daily Forecast</h3>
      
      <div className="daily-forecast-items">
        {dailyForecast.map((day, index) => {
          // Skip today (index 0) as it's already shown in CurrentWeather
          if (index === 0) return null;
          
          // Get day of week
          const dayName = index === 0 
            ? 'Today' 
            : index === 1 
              ? 'Tomorrow' 
              : getDayOfWeek(day.date);
          
          // Get date
          const date = formatDate(day.date);
          
          // Get weather icon
          const weatherIconUrl = day.hourly?.[4]?.weatherIconUrl?.[0]?.value;
          
          // Get weather description (use mid-day hour)
          const weatherDesc = day.hourly?.[4]?.weatherDesc?.[0]?.value || 'Unknown';
          
          // Get max and min temperature
          const maxTemp = Math.max(...day.hourly.map(hour => parseFloat(hour.tempC)));
          const minTemp = Math.min(...day.hourly.map(hour => parseFloat(hour.tempC)));
          
          return (
            <div key={index} className="daily-forecast-item">
              <div className="daily-forecast-day">
                <span className="day-name">{dayName}</span>
                <span className="day-date">{date}</span>
              </div>
              
              <div className="daily-forecast-icon">
                {weatherIconUrl && (
                  <img 
                    src={weatherIconUrl} 
                    alt={weatherDesc} 
                    className="day-icon"
                  />
                )}
              </div>
              
              <div className="daily-forecast-temp">
                <span className="day-max-temp">
                  {formatTemperature(maxTemp, units.temperature)}
                </span>
                <span className="day-min-temp">
                  {formatTemperature(minTemp, units.temperature)}
                </span>
              </div>
              
              <div className="daily-forecast-desc">
                <span className="day-desc">{weatherDesc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(DailyForecast);
