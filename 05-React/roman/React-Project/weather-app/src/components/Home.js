import React, { useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import getWeatherData from '../services/weatherService';
import { WeatherContext } from '../components/WeatherContext';

const Home = () => {
  const { weatherData, setWeatherData, setQuery } = useContext(WeatherContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');

  const navigate = useNavigate();
  const cities = ['Tel-Aviv', 'London', 'New York', 'Paris', 'Tokyo']; // Add more cities as needed

  const handleSearch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getWeatherData(selectedCity);
      setWeatherData(response.data);
      setQuery(selectedCity);
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [selectedCity, setWeatherData, setQuery]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <button onClick={handleSearch} disabled={!selectedCity}>
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>Current Weather for {selectedCity}</h2>
          <p>Temperature: {weatherData.current_condition[0].temp_C}°C</p>
          <p>Weather: {weatherData.current_condition[0].weatherDesc[0].value}</p>
          <img src={weatherData.current_condition[0].weatherIconUrl[0].value} alt="Weather icon" />
          <button onClick={() => navigate('/advanced')}>Advanced Details</button>
          <button onClick={() => navigate('/hourly')}>Hourly Forecast</button>
          <button onClick={() => navigate('/nextday')}>Next Day Forecast</button>
        </div>
      )}
    </div>
  );
};

console.log("home");
export default Home;
