import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import "./Weather.css";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [isKmh, setIsKmh] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [viewMode, setViewMode] = useState("current"); 
  const navigate = useNavigate();

  const handleCityChange = useCallback((e) => {
    setCity(e.target.value);
    setError(null); 
  }, []);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const toggleWindSpeedUnit = () => {
    setIsKmh(!isKmh);
  };

  const handleSearchClick = () => {
    setShowInput((prevShowInput) => !prevShowInput);
  };

  const handleShowMoreClick = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const encodedCity = encodeURIComponent(city);
          const response = await axios.get(
            `https://wttr.in/${encodedCity}?format=j1`
          );
          console.log(response.data);
          setWeatherData(response.data);
          setError(null);
        } catch (error) {
          setError("Error fetching weather data");
          setWeatherData(null);
        }
      };

      fetchWeather();
    }
  }, [city]);

  const current = useMemo(() => {
    return weatherData ? weatherData.current_condition[0] : null;
  }, [weatherData]);

  const forecastHourly = useMemo(() => {
    return weatherData ? weatherData.weather[0].hourly : [];
  }, [weatherData]);

  const forecastDaily = useMemo(() => {
    return weatherData ? weatherData.weather : [];
  }, [weatherData]);

  const convertTemp = (tempC) => {
    const parsedTemp = parseFloat(tempC);
    if (isNaN(parsedTemp)) return null;
    return isCelsius ? parsedTemp : parsedTemp * 1.8 + 32;
  };

  const convertWindSpeed = (speedKmh) => {
    const parsedSpeed = parseFloat(speedKmh);
    if (isNaN(parsedSpeed)) return null;
    return isKmh ? parsedSpeed : parsedSpeed / 1.609;
  };

  if (error) {
    return (
      <div className="weather-container">
        <button onClick={handleSearchClick}>
          {showInput ? "Close" : "Search"}
        </button>
        <div className={`search-input ${showInput ? "visible" : ""}`}>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
          />
        </div>
        <p>{error}</p>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="weather-container">
        <button onClick={handleSearchClick}>
          {showInput ? "Close" : "Search"}
        </button>
        <div className={`search-input ${showInput ? "visible" : ""}`}>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
          />
        </div>
        <p>click search.</p>
        <button className="buttonNav2" onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="weather-container">
          
      <button onClick={handleSearchClick}>
        {showInput ? "Close" : "Search"}
      </button>
      <div className={`search-input ${showInput ? "visible" : ""}`}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
      </div>

      
      <div className="view-mode-buttons">
        <button onClick={() => handleViewModeChange("current")}>
          Current Weather
        </button>
        <button onClick={() => handleViewModeChange("hourly")}>
          Hourly Forecast
        </button>
        <button onClick={() => handleViewModeChange("daily")}>
          Daily Forecast
        </button>
      </div>

    
      {viewMode === "current" && (
        <div>
          <h2>Weather in {city}</h2>
          <p>
            Temperature:{" "}
            {convertTemp(current.temp_C) !== null
              ? convertTemp(current.temp_C).toFixed(1)
              : "N/A"}°
            {isCelsius ? "C" : "F"}
          </p>
          <button onClick={toggleTemperatureUnit}>
            Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
          </button>
          <p>
            Wind Speed:{" "}
            {convertWindSpeed(current.windspeedKmph) !== null
              ? convertWindSpeed(current.windspeedKmph).toFixed(1)
              : "N/A"}{" "}
            {isKmh ? "km/h" : "mph"}
          </p>
          <button onClick={toggleWindSpeedUnit}>
            Switch to {isKmh ? "mph" : "km/h"}
          </button>

          <button onClick={handleShowMoreClick}>
            {showMore ? "Show Less" : "Show More"}
          </button>

          {showMore && (
            <div className="additional-info">
              <p>Humidity: {current.humidity}%</p>
              <p>Visibility: {current.visibility} km</p>
              <p>
                Feels Like:{" "}
                {convertTemp(current.FeelsLikeC) !== null
                  ? convertTemp(current.FeelsLikeC).toFixed(1)
                  : "N/A"}°
                {isCelsius ? "C" : "F"}
              </p>
              <p>UV Index: {forecastHourly[0]?.uvIndex || "N/A"}</p>
              <p>Wind Direction: {forecastHourly[0]?.winddirDegree}° ({forecastHourly[0]?.winddir16Point})</p>
              <p>Wind Speed: {forecastHourly[0]?.windspeedKmph} km/h</p>
              <p>Visibility (Miles): {forecastHourly[0]?.visibilityMiles || "N/A"} miles</p>
              <p>Heat Index: {forecastHourly[0]?.HeatIndexC}°C</p>
              <p>Chance of Fog: {forecastHourly[0]?.chanceoffog}%</p>
              <p>Chance of Snow: {forecastHourly[0]?.chanceofsnow}%</p>
              <p>Chance of Windy: {forecastHourly[0]?.chanceofwindy}%</p>
            </div>
          )}
        </div>
      )}

      {viewMode === "hourly" && (
        <div className="hourly-forecast">
          <h2>Hourly Forecast</h2>
          {forecastHourly.map((hour, index) => (
            <div key={index} className="hour-forecast">
              <p>
                Time: {hour.time.substr(0, hour.time.length - 2)}:00
              </p>
              <p>Temperature: {convertTemp(hour.tempC)}°{isCelsius ? "C" : "F"}</p>
              <p>Chance of Rain: {hour.chanceofrain}%</p>
              <p>Wind: {hour.windspeedKmph} km/h</p>
            </div>
          ))}
        </div>
      )}

      {viewMode === "daily" && (
        <div className="daily-forecast">
          <h2>Daily Forecast</h2>
          {forecastDaily.map((day, index) => (
            <div key={index} className="day-forecast">
              <p>Date: {day.date}</p>
              <p>Max Temp: {convertTemp(day.maxtempC)}°C</p>
              <p>Min Temp: {convertTemp(day.mintempC)}°C</p>
              <p>Chance of Rain: {day.hourly[0].chanceofrain}%</p>
              <p>Wind: {day.hourly[0].windspeedKmph} km/h</p>
            </div>
          ))}
      
        </div>
      )}
  
    </div>
    
  );
};

export default Weather;
