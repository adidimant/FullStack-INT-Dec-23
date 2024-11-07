import React, { useContext, useState } from 'react';
import { WeatherContext } from '../components/WeatherContext';

const NextDay = () => {
  const { weatherData, query } = useContext(WeatherContext);
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the next day

  if (!weatherData) {
    return <p>No data available. Please go back and search for a city first.</p>;
  }

  const nextDayData = weatherData.weather[currentIndex];

  const handleNextDay = () => {
    if (currentIndex < weatherData.weather.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevDay = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Weather Forecast for {query} - Day {currentIndex + 1}</h1>
      <p><strong>Date:</strong> {nextDayData.date}</p>
      <p><strong>Max Temperature:</strong> {nextDayData.maxtempC}°C</p>
      <p><strong>Min Temperature:</strong> {nextDayData.mintempC}°C</p>
      <p><strong>Average Temperature:</strong> {nextDayData.avgtempC}°C</p>
      <p><strong>Weather:</strong> {nextDayData.hourly[0].weatherDesc[0].value}</p>
      <img src={nextDayData.hourly[0].weatherIconUrl[0].value} alt="Weather icon" />
      <button onClick={handlePrevDay} disabled={currentIndex === 1}>Previous Day</button>
      <button onClick={handleNextDay} disabled={currentIndex >= weatherData.weather.length - 1}>Next Day</button>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default NextDay;
