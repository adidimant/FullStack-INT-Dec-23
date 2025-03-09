import React, { useCallback, memo } from 'react';
import { useWeather } from '../context/WeatherContext';
import './UnitToggle.css';

const UnitToggle = () => {
  const { units, setUnits } = useWeather();

  // Handle temperature unit change
  const handleTemperatureUnitChange = useCallback(() => {
    setUnits({
      temperature: units.temperature === 'celsius' ? 'fahrenheit' : 'celsius'
    });
  }, [units.temperature, setUnits]);

  // Handle distance unit change
  const handleDistanceUnitChange = useCallback(() => {
    setUnits({
      distance: units.distance === 'km' ? 'miles' : 'km'
    });
  }, [units.distance, setUnits]);

  return (
    <div className="unit-toggle-container">
      <div className="unit-toggle">
        <span className="unit-label">Temperature:</span>
        <button
          className={`unit-button ${units.temperature === 'celsius' ? 'active' : ''}`}
          onClick={handleTemperatureUnitChange}
        >
          {units.temperature === 'celsius' ? '°C' : '°F'}
        </button>
      </div>

      <div className="unit-toggle">
        <span className="unit-label">Distance:</span>
        <button
          className={`unit-button ${units.distance === 'km' ? 'active' : ''}`}
          onClick={handleDistanceUnitChange}
        >
          {units.distance === 'km' ? 'km' : 'mi'}
        </button>
      </div>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(UnitToggle);
