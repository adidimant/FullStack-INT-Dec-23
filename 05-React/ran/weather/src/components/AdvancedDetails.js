import React, { useState, useCallback, memo } from 'react';
import { useWeather } from '../context/WeatherContext';
import { 
  formatTemperature, 
  formatSpeed, 
  formatDistance,
  getCurrentConditions
} from '../utils/formatters';
import './AdvancedDetails.css';

const AdvancedDetails = () => {
  const { weatherData, units } = useWeather();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get current conditions from weather data
  const currentConditions = weatherData ? getCurrentConditions(weatherData) : null;
  
  // Toggle expanded state
  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);
  
  // If no data, don't render
  if (!currentConditions) {
    return null;
  }
  
  return (
    <div className="advanced-details-container">
      <button 
        className="advanced-toggle-button"
        onClick={toggleExpanded}
      >
        {isExpanded ? 'Hide Advanced Details' : 'Show Advanced Details'}
      </button>
      
      {isExpanded && (
        <div className="advanced-details-content">
          <h3 className="advanced-details-title">Advanced Weather Details</h3>
          
          <div className="advanced-details-grid">
            {/* UV Index */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">UV Index</span>
              <span className="detail-grid-value">{currentConditions.uvIndex}</span>
            </div>
            
            {/* Wind Direction */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Wind Direction</span>
              <span className="detail-grid-value">{currentConditions.winddir16Point}</span>
            </div>
            
            {/* Wind Degree */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Wind Degree</span>
              <span className="detail-grid-value">{currentConditions.winddirDegree}°</span>
            </div>
            
            {/* Humidity */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Humidity</span>
              <span className="detail-grid-value">{currentConditions.humidity}%</span>
            </div>
            
            {/* Visibility */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Visibility</span>
              <span className="detail-grid-value">
                {formatDistance(currentConditions.visibility, units.distance)}
              </span>
            </div>
            
            {/* Visibility Miles */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Visibility (Miles)</span>
              <span className="detail-grid-value">{currentConditions.visibilityMiles} mi</span>
            </div>
            
            {/* Pressure */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Pressure</span>
              <span className="detail-grid-value">{currentConditions.pressure} mb</span>
            </div>
            
            {/* Precipitation */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Precipitation</span>
              <span className="detail-grid-value">{currentConditions.precipMM} mm</span>
            </div>
            
            {/* Cloud Cover */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Cloud Cover</span>
              <span className="detail-grid-value">{currentConditions.cloudcover}%</span>
            </div>
            
            {/* Feels Like */}
            <div className="detail-grid-item">
              <span className="detail-grid-label">Feels Like</span>
              <span className="detail-grid-value">
                {formatTemperature(currentConditions.FeelsLikeC, units.temperature)}
              </span>
            </div>
            
            {/* Heat Index */}
            {currentConditions.HeatIndexC && (
              <div className="detail-grid-item">
                <span className="detail-grid-label">Heat Index</span>
                <span className="detail-grid-value">
                  {formatTemperature(currentConditions.HeatIndexC, units.temperature)}
                </span>
              </div>
            )}
            
            {/* Dew Point */}
            {currentConditions.DewPointC && (
              <div className="detail-grid-item">
                <span className="detail-grid-label">Dew Point</span>
                <span className="detail-grid-value">
                  {formatTemperature(currentConditions.DewPointC, units.temperature)}
                </span>
              </div>
            )}
            
            {/* Wind Chill */}
            {currentConditions.WindChillC && (
              <div className="detail-grid-item">
                <span className="detail-grid-label">Wind Chill</span>
                <span className="detail-grid-value">
                  {formatTemperature(currentConditions.WindChillC, units.temperature)}
                </span>
              </div>
            )}
            
            {/* Wind Gust */}
            {currentConditions.WindGustKmph && (
              <div className="detail-grid-item">
                <span className="detail-grid-label">Wind Gust</span>
                <span className="detail-grid-value">
                  {formatSpeed(currentConditions.WindGustKmph, units.distance)}
                </span>
              </div>
            )}
          </div>
          
          {/* Weather Chances Section */}
          {(currentConditions.chanceofrain || 
            currentConditions.chanceofsnow || 
            currentConditions.chanceoffog || 
            currentConditions.chanceofthunder || 
            currentConditions.chanceofwindy) && (
            <div className="weather-chances">
              <h4 className="weather-chances-title">Weather Chances</h4>
              <div className="weather-chances-grid">
                {currentConditions.chanceofrain && (
                  <div className="chance-item">
                    <span className="chance-label">Rain</span>
                    <span className="chance-value">{currentConditions.chanceofrain}%</span>
                  </div>
                )}
                
                {currentConditions.chanceofsnow && (
                  <div className="chance-item">
                    <span className="chance-label">Snow</span>
                    <span className="chance-value">{currentConditions.chanceofsnow}%</span>
                  </div>
                )}
                
                {currentConditions.chanceoffog && (
                  <div className="chance-item">
                    <span className="chance-label">Fog</span>
                    <span className="chance-value">{currentConditions.chanceoffog}%</span>
                  </div>
                )}
                
                {currentConditions.chanceofthunder && (
                  <div className="chance-item">
                    <span className="chance-label">Thunder</span>
                    <span className="chance-value">{currentConditions.chanceofthunder}%</span>
                  </div>
                )}
                
                {currentConditions.chanceofwindy && (
                  <div className="chance-item">
                    <span className="chance-label">Windy</span>
                    <span className="chance-value">{currentConditions.chanceofwindy}%</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(AdvancedDetails);
