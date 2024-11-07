import React, { useContext } from 'react';
import { WeatherContext } from '../components/WeatherContext';

const Hourly = () => {
  const { weatherData, query } = useContext(WeatherContext);

  if (!weatherData) {
    return <p>No data available. Please go back and search for a city first.</p>;
  }

  const hourlyData = weatherData.weather[0].hourly;

  const formatTime = (time) => {
    return time.padStart(4, '0').slice(0, 2) + ':' + time.padStart(4, '0').slice(2);
  };

  return (
    <div>
      <h1>Hourly Weather Forecast for {query}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {hourlyData.map((hour, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p><strong>Time:</strong> {formatTime(hour.time)}</p>
            <p><strong>Temperature:</strong> {hour.tempC}°C</p>
            <p><strong>Weather:</strong> {hour.weatherDesc[0].value}</p>
            <img src={hour.weatherIconUrl[0].value} alt="Weather icon" />
          </div>
        ))}
      </div>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default Hourly;
