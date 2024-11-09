
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type WeatherData = {
  current_condition: [];
  nearest_area: [];
  request: [];
  weather: [];
}

type WeatherContextProps = {
  weatherData: WeatherData | null;
  fetchWeatherData: (location: string) => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (location: string) => {
    
    try {
      const response = await axios.get(`https://wttr.in/${location}?format=j1`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    } 
  };

  const fetchUserLocationWeather = async () => {
    try {
      const ipResponse = await axios.get("http://ip-api.com/json");
      let city = ipResponse.data.city || "Tel-Aviv";
      city = city.replace(/\s+/g, "-"); //מחליף את כל הרווחים ב"-""
      fetchWeatherData(city);
    } catch (error) {
      console.error("Error fetching IP location data:", error);
      fetchWeatherData("Tel-Aviv");
    }
  };

  useEffect(() => {
    fetchUserLocationWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = (): WeatherContextProps => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
