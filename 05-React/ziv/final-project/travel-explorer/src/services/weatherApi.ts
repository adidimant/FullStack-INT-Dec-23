import axios from 'axios';
import { Weather } from '../types/weather.types';

const WEATHER_API_KEY = 'dc935adfbd72f63932aba3d348311219';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (
  latitude: number,
  longitude: number
): Promise<Weather> => {
  try {
    // Get current weather and 5-day forecast in one call
    const response = await axios.get(
      `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
    );

    const currentWeather = response.data.list[0];
    const forecastData = response.data.list;

    // Group forecast data by day
    const dailyForecasts = forecastData.reduce((acc: any[], item: any) => {
      const date = new Date(item.dt * 1000).toISOString().split('T')[0];
      if (!acc.find((f: any) => f.date.split('T')[0] === date)) {
        acc.push({
          date: new Date(item.dt * 1000).toISOString(),
          temp: {
            min: item.main.temp_min,
            max: item.main.temp_max,
          },
          condition: item.weather[0].main,
          icon: item.weather[0].icon,
          precipitation: item.pop * 100,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed * 3.6,
          sunrise: new Date((response.data.city.sunrise + response.data.city.timezone) * 1000).toISOString(),
          sunset: new Date((response.data.city.sunset + response.data.city.timezone) * 1000).toISOString(),
        });
      }
      return acc;
    }, []).slice(0, 7);

    return {
      current: {
        temp: Math.round(currentWeather.main.temp),
        condition: currentWeather.weather[0].main,
        icon: currentWeather.weather[0].icon,
        humidity: currentWeather.main.humidity,
        windSpeed: Math.round(currentWeather.wind.speed * 3.6), // Convert m/s to km/h
        feelsLike: Math.round(currentWeather.main.feels_like),
        uvIndex: 0, // UV index not available in this endpoint
      },
      forecast: dailyForecasts,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};