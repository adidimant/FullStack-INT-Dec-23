import React, { createContext, useState, useContext, useEffect } from 'react';
import WeatherApiResponse from '../types/types';
import { fetchWeatherData } from '../api';

interface WeatherContextType {
    weatherResults: WeatherApiResponse | null;
    loading: boolean;
    error: string | null;
    area: string;
    updateArea: (newArea: string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const fetchOnMount = async (
    area: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setWeatherResults: React.Dispatch<React.SetStateAction<WeatherApiResponse | null>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    try {
        setError(null);
        setLoading(true);
        const data = await fetchWeatherData(area, setError);
        setWeatherResults(data);

        localStorage.setItem('weatherData', JSON.stringify(data));
        saveAreaToLocalStorage(area);

    } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
        setLoading(false);
    }
};

const saveAreaToLocalStorage = (newArea: string) => {
    const areaHistory = JSON.parse(localStorage.getItem('areaHistory') || '[]');
    if (!areaHistory.includes(newArea)) {
        areaHistory.push(newArea);
        localStorage.setItem('areaHistory', JSON.stringify(areaHistory));
    }
};

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {
    const [weatherResults, setWeatherResults] = useState<WeatherApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [area, setArea] = useState<string>('');

    const updateArea = (newArea: string) => {
        setArea(newArea);
        fetchOnMount(newArea, setLoading, setWeatherResults, setError);
    };

    useEffect(() => {
        // Load weather data from localStorage (if exists)
        const storedWeatherData = localStorage.getItem('weatherData');
        const storedArea = localStorage.getItem('areaHistory');

        if (storedWeatherData) {
            setWeatherResults(JSON.parse(storedWeatherData));
        }

        if (storedArea) {
            const areaHistory = JSON.parse(storedArea);
            if (areaHistory.length > 0) {
                // You could set the most recent area or any other preferred logic
                setArea(areaHistory[areaHistory.length - 1]);
            }
        }
    }, []);

    return (
        <WeatherContext.Provider value={{ weatherResults, loading, error, area, updateArea }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = (): WeatherContextType => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeatherContext must be used within a WeatherProvider');
    }
    return context;
};