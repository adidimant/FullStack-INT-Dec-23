import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';

// Initial state
const initialState = {
  location: '',
  weatherData: null,
  isLoading: false,
  error: null,
  units: {
    temperature: 'celsius', // celsius or fahrenheit
    distance: 'km' // km or miles
  },
  searchType: 'query', // 'query' or 'location'
};

// Action types
const ActionTypes = {
  SET_LOCATION: 'SET_LOCATION',
  SET_WEATHER_DATA: 'SET_WEATHER_DATA',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_UNITS: 'SET_UNITS',
  SET_SEARCH_TYPE: 'SET_SEARCH_TYPE',
};

// Reducer function
const weatherReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOCATION:
      return { ...state, location: action.payload };
    case ActionTypes.SET_WEATHER_DATA:
      return { ...state, weatherData: action.payload, error: null };
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ActionTypes.SET_UNITS:
      return { 
        ...state, 
        units: { ...state.units, ...action.payload } 
      };
    case ActionTypes.SET_SEARCH_TYPE:
      return { ...state, searchType: action.payload };
    default:
      return state;
  }
};

// Create context
const WeatherContext = createContext();

// Context provider component
export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // Load saved data from localStorage on initial render
  React.useEffect(() => {
    const savedData = localStorage.getItem('weatherData');
    const savedUnits = localStorage.getItem('weatherUnits');
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: ActionTypes.SET_WEATHER_DATA, payload: parsedData });
        dispatch({ type: ActionTypes.SET_LOCATION, payload: parsedData.nearest_area?.[0]?.areaName?.[0]?.value || '' });
      } catch (error) {
        console.error('Error parsing saved weather data:', error);
      }
    }
    
    if (savedUnits) {
      try {
        const parsedUnits = JSON.parse(savedUnits);
        dispatch({ type: ActionTypes.SET_UNITS, payload: parsedUnits });
      } catch (error) {
        console.error('Error parsing saved units:', error);
      }
    }
  }, []);

  // Save data to localStorage when it changes
  React.useEffect(() => {
    if (state.weatherData) {
      localStorage.setItem('weatherData', JSON.stringify(state.weatherData));
    }
    localStorage.setItem('weatherUnits', JSON.stringify(state.units));
  }, [state.weatherData, state.units]);

  // Action creators
  const setLocation = useCallback((location) => {
    dispatch({ type: ActionTypes.SET_LOCATION, payload: location });
  }, []);

  const setWeatherData = useCallback((data) => {
    dispatch({ type: ActionTypes.SET_WEATHER_DATA, payload: data });
  }, []);

  const setLoading = useCallback((isLoading) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: isLoading });
  }, []);

  const setError = useCallback((error) => {
    dispatch({ type: ActionTypes.SET_ERROR, payload: error });
  }, []);

  const setUnits = useCallback((units) => {
    dispatch({ type: ActionTypes.SET_UNITS, payload: units });
  }, []);

  const setSearchType = useCallback((type) => {
    dispatch({ type: ActionTypes.SET_SEARCH_TYPE, payload: type });
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    ...state,
    setLocation,
    setWeatherData,
    setLoading,
    setError,
    setUnits,
    setSearchType,
  }), [
    state,
    setLocation,
    setWeatherData,
    setLoading,
    setError,
    setUnits,
    setSearchType
  ]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use the weather context
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
