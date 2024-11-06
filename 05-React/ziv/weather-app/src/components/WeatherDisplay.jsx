/*components/WeatherDisplay.jsx

Displays the main weather data, including current temperature, wind speed, and an hourly forecast.
Allows toggling of AdvancedWeatherDetails to view additional weather information, such as UV index and precipitation chances.*/


import React, { useState, useContext, useMemo } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import AdvancedWeatherDetails from '../pages/AdvancedWeatherDetails';

const WeatherDisplay = React.memo(({ weather, error, onRetry }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const { unit, toggleTempUnit, toggleDistanceUnit } = useContext(WeatherContext);
  const [dayIndex, setDayIndex] = useState(0);
  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false); // New state for toggling

  const currentHour = new Date().getHours();
  const isNight = currentHour >= 18 || currentHour < 6;

  const getWeatherEmoji = useMemo(() => {
    return (condition, isNightTime = isNight) => {
      const lowerCondition = condition?.toLowerCase() || '';

      if (lowerCondition.includes('rain')) return '🌧️';
      if (lowerCondition.includes('snow')) return '❄️';
      if (lowerCondition.includes('thunderstorm')) return '⛈️';
      if (lowerCondition.includes('fog') || lowerCondition.includes('mist')) return '🌫️';
      if (lowerCondition.includes('cloudy')) return '☁️';

      return isNightTime ? '🌙' : '☀️';
    };
  }, [isNight]);

  const dayForecast = weather?.weather?.[dayIndex] || {};

  const selectedDate = useMemo(() => {
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() + dayIndex);
    return baseDate.toLocaleDateString(undefined, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [dayIndex]);

  if (error) {
    return (
      <div className="error-prompt">
        <p>City not found.</p>
        <p>Please enter a valid city name.</p>
        <button onClick={onRetry}>Back to Previous Result</button>
      </div>
    );
  }

  if (!weather || !weather.current_condition || !weather.current_condition.length) {
    return <p>No weather data available.</p>;
  }

  const currentCondition = weather.current_condition[0];
  const nearestArea = weather.nearest_area[0];

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
    toggleTempUnit();
  };

  const windSpeed = unit.distance === 'KMs' ? currentCondition.windspeedKmph : currentCondition.windspeedMiles;
  const windUnit = unit.distance === 'KMs' ? 'km/h' : 'mph';

  return (
    <div className="weather-display">
      <h2>Weather in {nearestArea.areaName[0]?.value}</h2>
      <p>
        Current Temperature: {isCelsius ? `${currentCondition.temp_C}°` : `${currentCondition.temp_F}°`} {getWeatherEmoji(currentCondition.weatherDesc[0]?.value)}
      </p>
      <p>
        Wind Speed: {windSpeed} {windUnit}
      </p>
      
      <button onClick={toggleTemperatureUnit}>
        Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>
      <button onClick={toggleDistanceUnit}>
        Switch to {unit.distance === 'KMs' ? 'Miles' : 'KMs'}
      </button>

      <h2>Hourly Forecast (Next 24 Hours)</h2>
      <h3>{selectedDate}</h3>
      <div className="hourly-forecast">
        {dayForecast.hourly?.map((hour, index) => {
          const hourTime = hour.time.padStart(4, '0').slice(0, 2);
          const hourInt = parseInt(hourTime, 10);
          const isHourlyNight = hourInt >= 18 || hourInt < 6;
          const isCurrentHour = hourInt === currentHour;
          const formattedHour = isCurrentHour ? 'Now' : `${hourTime}:00`;
          const hourTemp = isCelsius ? hour.tempC : hour.tempF;
          const hourCondition = hour.weatherDesc[0]?.value;

          return (
            <div className="hour-item" key={index}>
              <p className="hour-time">{formattedHour}</p>
              <p className="hour-emoji">{getWeatherEmoji(hourCondition, isHourlyNight)}</p>
              <p className="hour-temp">{hourTemp ? `${hourTemp}°` : 'N/A'}</p>
            </div>
          );
        })}
      </div>

      <div className="day-navigation">
        <button onClick={() => setDayIndex((prev) => Math.max(prev - 1, 0))} disabled={dayIndex === 0}>Previous Day</button>
        <button onClick={() => setDayIndex((prev) => Math.min(prev + 1, weather.weather.length - 1))} disabled={dayIndex === weather.weather.length - 1}>Next Day</button>
      </div>

      <div className="advanced-details-toggle">
        <h3 onClick={() => setShowAdvancedDetails(!showAdvancedDetails)}>
          Advanced Weather Details {showAdvancedDetails ? '▲' : '▼'}
        </h3>
        {showAdvancedDetails && (
          <AdvancedWeatherDetails details={{
            uvIndex: currentCondition.uvIndex,
            windSpeed: windSpeed,
            windDir: currentCondition.winddir16Point,
            humidity: currentCondition.humidity,
            visibility: currentCondition.visibility,
            feelsLikeC: currentCondition.FeelsLikeC,
            feelsLikeF: currentCondition.FeelsLikeF,
            chanceofrain: dayForecast.hourly?.[0]?.chanceofrain,
          }} />
        )}
      </div>
    </div>
  );
});

export default WeatherDisplay;
