import React, { useContext } from 'react';
import { WeatherContext } from '../components/WeatherContext';

const Advanced = () => {
  const { weatherData, query } = useContext(WeatherContext);

  if (!weatherData) {
    return <p>No data available. Please go back and search for a city first.</p>;
  }

  const detailedData = weatherData.weather[0];
  const weeklyForecast = weatherData.weather;

  return (
    <div>
      <h1>Advanced Weather Details for {query}</h1>
      <p>UV Index: {detailedData.uvIndex}</p>
      <p>Wind Speed: {detailedData.hourly[0].windspeedKmph} km/h</p>
      <p>Wind Direction: {detailedData.hourly[0].winddir16Point}</p>
      <p>Humidity: {detailedData.hourly[0].humidity}%</p>
      <p>Visibility: {detailedData.hourly[0].visibility} km</p>
      <p>Visibility Miles: {detailedData.hourly[0].visibilityMiles} miles</p>
      <p>Heat Index: {detailedData.hourly[0].HeatIndexC}°C</p>
      <p>Chance of Fog: {detailedData.hourly[0].chanceoffog}%</p>
      <p>Chance of Snow: {detailedData.hourly[0].chanceofsnow}%</p>
      <p>Chance of Windy: {detailedData.hourly[0].chanceofwindy}%</p>
      <p>Feels Like: {detailedData.hourly[0].FeelsLikeC}°C</p>
      <button onClick={() => window.history.back()}>Go Back</button>

      <h2>Weekly Forecast</h2>
      {weeklyForecast.map((day, index) => (
        <div key={index}>
          <h3>Day {index + 1}</h3>
          <p>Max Temperature: {day.maxtempC}°C</p>
          <p>Min Temperature: {day.mintempC}°C</p>
          <p>Average Temperature: {day.avgtempC}°C</p>
          <p>Weather: {day.hourly[0].weatherDesc[0].value}</p>
          <img src={day.hourly[0].weatherIconUrl[0].value} alt="Weather icon" />
        </div>
      ))}
    </div>
  );
};

export default Advanced;
