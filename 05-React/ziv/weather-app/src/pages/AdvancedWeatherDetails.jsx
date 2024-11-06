/*pages/AdvancedWeatherDetails.jsx

Displays additional detailed weather data when expanded, such as UV index, humidity, and visibility.
Only visible when toggled on from the main WeatherDisplay.*/

import React from 'react';

const AdvancedWeatherDetails = ({ details }) => {
  if (!details) return <p>No additional weather details available.</p>;

  return (
    <div className="advanced-weather">
      <p>UV Index: {details.uvIndex || 'N/A'}</p>
      <p>Wind Speed: {details.windSpeed || 'N/A'} km/h</p>
      <p>Wind Direction: {details.windDir || 'N/A'}</p>
      <p>Humidity: {details.humidity || 'N/A'}%</p>
      <p>Visibility: {details.visibility || 'N/A'} km</p>
      <p>Feels Like: {details.feelsLikeC || 'N/A'} °C / {details.feelsLikeF || 'N/A'} °F</p>
      <p>Chance of Rain: {details.chanceofrain ? `${details.chanceofrain}%` : 'N/A'}</p>
      <p>Chance of Fog: {details.chanceofFog ? `${details.chanceofFog}%` : 'N/A'}</p>
      <p>Chance of Snow: {details.chanceofSnow ? `${details.chanceofSnow}%` : 'N/A'}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default AdvancedWeatherDetails;
