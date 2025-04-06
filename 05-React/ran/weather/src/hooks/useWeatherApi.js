import { useState, useCallback } from 'react';
import { useWeather } from '../context/WeatherContext';
import { mockWeatherData } from '../utils/mockData';

// Custom hook for making API calls to wttr.in
const useWeatherApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setWeatherData, setLocation, setLoading, setError: setContextError } = useWeather();

  // Function to fetch weather data by query (city name) - using mock data
  const fetchWeatherByQuery = useCallback(async (query) => {
    console.log('fetchWeatherByQuery called with query:', query);
    if (!query) return;
    
    setIsLoading(true);
    setLoading(true);
    setError(null);
    setContextError(null);
    
    console.log('Loading state set to true');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      console.log('Using mock data');
      // Use mock data instead of API call
      const data = mockWeatherData;
      console.log('Mock data:', data);
      
      setWeatherData(data);
      console.log('Weather data set in context');
      
      // Set location from the mock data
      if (data.nearest_area && data.nearest_area.length > 0) {
        const areaName = data.nearest_area[0].areaName[0].value;
        setLocation(areaName);
        console.log('Location set to:', areaName);
      }
      
      setIsLoading(false);
      setLoading(false);
      console.log('Loading state set to false');
      return data;
    } catch (err) {
      const errorMessage = err.message || 'Failed to fetch weather data';
      setError(errorMessage);
      setContextError(errorMessage);
      setIsLoading(false);
      setLoading(false);
      return null;
    }
  }, [setWeatherData, setLocation, setLoading, setContextError]);

  // Function to fetch weather data by geolocation - using mock data
  const fetchWeatherByLocation = useCallback(async (latitude, longitude) => {
    console.log('fetchWeatherByLocation called with coordinates:', latitude, longitude);
    if (!latitude || !longitude) return;
    
    setIsLoading(true);
    setLoading(true);
    setError(null);
    setContextError(null);
    
    console.log('Loading state set to true');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      console.log('Using mock data');
      // Use mock data instead of API call
      const data = mockWeatherData;
      console.log('Mock data:', data);
      
      setWeatherData(data);
      console.log('Weather data set in context');
      
      // Set location from the mock data
      if (data.nearest_area && data.nearest_area.length > 0) {
        const areaName = data.nearest_area[0].areaName[0].value;
        setLocation(areaName);
        console.log('Location set to:', areaName);
      }
      
      setIsLoading(false);
      setLoading(false);
      console.log('Loading state set to false');
      return data;
    } catch (err) {
      const errorMessage = err.message || 'Failed to fetch weather data';
      setError(errorMessage);
      setContextError(errorMessage);
      setIsLoading(false);
      setLoading(false);
      return null;
    }
  }, [setWeatherData, setLocation, setLoading, setContextError]);

  return {
    fetchWeatherByQuery,
    fetchWeatherByLocation,
    isLoading,
    error
  };
};

export default useWeatherApi;
