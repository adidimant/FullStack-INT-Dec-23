import React, { useState, useCallback, memo } from 'react';
import { useWeather } from '../context/WeatherContext';
import { 
  formatTemperature, 
  getHourlyForecastForDay
} from '../utils/formatters';
import './HourlyForecast.css';

const HourlyForecast = () => {
  const { weatherData, units } = useWeather();
  const [selectedDay, setSelectedDay] = useState(0); // Default to first day (today)
  
  // Get hourly forecast for the selected day
  const hourlyForecast = weatherData 
    ? getHourlyForecastForDay(weatherData, selectedDay) 
    : [];
  
  // Get available days for selection
  const availableDays = weatherData?.weather?.map((day, index) => ({
    date: day.date,
    index
  })) || [];
  
  // Handle day change
  const handleDayChange = useCallback((index) => {
    setSelectedDay(index);
  }, []);
  
  // If no data, don't render
  if (!weatherData || hourlyForecast.length === 0) {
    return null;
  }
  
  return (
    <div className="hourly-forecast-container">
      <div className="hourly-forecast-header">
        <h3 className="hourly-forecast-title">Hourly Forecast</h3>
        
        {availableDays.length > 1 && (
          <div className="day-selector">
            {availableDays.map((day) => (
              <button
                key={day.index}
                className={`day-selector-button ${selectedDay === day.index ? 'active' : ''}`}
                onClick={() => handleDayChange(day.index)}
              >
                {day.index === 0 ? 'Today' : new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="hourly-forecast-scroll">
        <div className="hourly-forecast-items">
          {hourlyForecast.map((hour, index) => {
            // Get time from hour data
            const timeStr = `${hour.time.substring(0, 2)}:00`;
            
            return (
              <div key={index} className="hourly-forecast-item">
                <span className="hour-time">{timeStr}</span>
                
                {hour.weatherIconUrl && hour.weatherIconUrl[0] && (
                  <img 
                    src={hour.weatherIconUrl[0].value} 
                    alt={hour.weatherDesc?.[0]?.value || 'Weather icon'} 
                    className="hour-icon"
                  />
                )}
                
                <span className="hour-temp">
                  {formatTemperature(hour.tempC, units.temperature)}
                </span>
                
                <span className="hour-desc">
                  {hour.weatherDesc?.[0]?.value || 'Unknown'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(HourlyForecast);
