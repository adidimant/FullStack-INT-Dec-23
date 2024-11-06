import { createContext, useState, useCallback, ReactNode, useEffect, useMemo } from "react";
import { WeatherApiResponse, WeatherDataType } from "../types/weatherApiTypes";

type WeatherContextType = {
  weatherData: WeatherDataType;
  city: string;
  setCity: (city: string) => void;
  fetchWeather: (city: string) => Promise<void>;
};

export const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  city: "tel aviv",
  setCity: () => {},
  fetchWeather: async () => {},
});

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const savedCity = localStorage.getItem("savedCity");
  const defaultCity = useMemo(() => {
    if (savedCity) {
      return savedCity;
    } else {
      return "Tel Aviv";
    }
  }, [savedCity]);

  const [weatherData, setWeatherData] = useState<WeatherDataType>(null);

  const [city, setCity] = useState(defaultCity);

  const fetchWeather = useCallback(async (city: string) => {
    const url = `https://wttr.in/${city}?format=j1`;
    try {
      setWeatherData(null);
      const response = await fetch(url);
      if (!response.ok) {
        setWeatherData("not found");
        return;
      }
      const data: WeatherApiResponse = await response.json();
      setWeatherData(data);
    } catch (error) {
      setWeatherData("api error");
      console.error("Failed to fetch weather data:", error);
    }
  }, []);

  useEffect(() => {
    fetchWeather(city);
    localStorage.setItem("savedCity", city);
  }, [city, fetchWeather]);

  return (
    <WeatherContext.Provider value={{ weatherData, city, setCity, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
