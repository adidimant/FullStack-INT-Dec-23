import React from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import { format } from 'date-fns';
import { Weather } from '../../types';

interface WeatherWidgetProps {
  weather: Weather;
  location: string;
}

export const WeatherWidget = ({ weather, location }: WeatherWidgetProps) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
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
          <p className="text-gray-600">{weather.current.condition}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center text-gray-600 mb-2">
            <Wind className="w-4 h-4 mr-1" />
            <span>{weather.current.windSpeed} km/h</span>
          </div>
          <p className="text-gray-600">
            Humidity: {weather.current.humidity}%
          </p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};