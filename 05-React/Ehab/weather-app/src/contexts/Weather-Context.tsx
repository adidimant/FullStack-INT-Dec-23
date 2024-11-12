import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WeatherType } from '../types/types';

// Define the context type
type WeatherContextType = {
  data: WeatherType;
  dispatch: React.Dispatch<React.SetStateAction<WeatherType>>;
};

// Create the context with an undefined initial value
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Define the provider component
type WeatherProvider = {
  children: ReactNode;
};

export const WeatherProvider: React.FC<WeatherProvider> = ({ children }) => {
  const [data, dispatch] = useState<WeatherType>({ } as WeatherType);

  return (
    <WeatherContext.Provider value={{ data, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use the context
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a MyDataProvider');
  }
  return context;
};
