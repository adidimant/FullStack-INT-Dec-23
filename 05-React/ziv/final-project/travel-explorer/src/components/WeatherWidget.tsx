import React from 'react';
import { Cloud, Sun, CloudRain, Wind, CloudLightning, CloudSnow, Cloudy, Droplets, Sunrise, Sunset } from 'lucide-react';
import { format } from 'date-fns';
import { Weather } from '../../types/weather.types';

interface WeatherWidgetProps {
  weather: Weather;
  location: string;
}

export const WeatherWidget = ({ weather, location }: WeatherWidgetProps) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'clouds':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      case 'thunderstorm':
        return <CloudLightning className="w-8 h-8 text-purple-500" />;
      case 'snow':
        return <CloudSnow className="w-8 h-8 text-blue-300" />;
      case 'mist':
      case 'fog':
        return <Cloudy className="w-8 h-8 text-gray-400" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{location}</h3>
          <p className="text-sm text-gray-500">Current Weather</p>
        </div>
        {getWeatherIcon(weather.current.condition)}
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-4xl font-bold text-gray-900">
            {Math.round(weather.current.temp)}°C
          </p>
          <p className="text-sm text-gray-600">
            Feels like {Math.round(weather.current.feelsLike)}°C
          </p>
          <p className="text-gray-600 mt-1">{weather.current.condition}</p>
        </div>
        <div className="text-right space-y-2">
          <div className="flex items-center justify-end text-gray-600">
            <Wind className="w-4 h-4 mr-1" />
            <span>{Math.round(weather.current.windSpeed)} km/h</span>
          </div>
          <div className="flex items-center justify-end text-gray-600">
            <Droplets className="w-4 h-4 mr-1" />
            <span>{weather.current.humidity}%</span>
          </div>
          <div className="text-gray-600">
            UV Index: {Math.round(weather.current.uvIndex)}
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-4">5-Day Forecast</h4>
        <div className="grid grid-cols-7 gap-2">
          {weather.forecast.map((day) => (
            <div key={day.date} className="text-center">
              <p className="text-xs font-medium text-gray-600">
                {format(new Date(day.date), 'EEE')}
              </p>
              <div className="my-2">
                {getWeatherIcon(day.condition)}
              </div>
              <p className="text-sm font-semibold text-gray-900">
                {Math.round(day.temp.max)}°
              </p>
              <p className="text-xs text-gray-500">
                {Math.round(day.temp.min)}°
              </p>
              <div className="mt-1 space-y-1">
                {day.precipitation > 0 && (
                  <p className="text-xs text-blue-500">
                    {Math.round(day.precipitation)}%
                  </p>
                )}
                <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                  <Sunrise className="w-3 h-3" />
                  <span>{format(new Date(day.sunrise), 'HH:mm')}</span>
                </div>
                <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                  <Sunset className="w-3 h-3" />
                  <span>{format(new Date(day.sunset), 'HH:mm')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};