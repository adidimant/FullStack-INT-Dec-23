import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Globe, Languages, Flag, Clock, } from 'lucide-react';
import { countries } from '../data/countries';
import { WeatherWidget } from '../components/weather/WeatherWidget';
import { CurrencyConverter } from '../components/currency/CurrencyConverter';
import { getWeather } from '../services/weatherApi';
import { Weather } from '../types/weather.types';

export const CountryPage = () => {
  const { id } = useParams();
  const country = countries.find((c) => c.id === id);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!country) return;
      
      setIsLoadingWeather(true);
      setWeatherError(null);
      
      try {
        const [lat, lon] = country.coordinates;
        const weatherData = await getWeather(lat, lon);
        setWeather(weatherData);
      } catch (error) {
        console.error('Failed to fetch weather:', error);
        setWeatherError('Unable to load weather data');
      } finally {
        setIsLoadingWeather(false);
      }
    };

    fetchWeather();
  }, [country]);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Country not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-xl overflow-hidden">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={country.flagUrl}
              alt={`${country.name} flag`}
              className="w-12 h-8 rounded shadow-md"
            />
            <h1 className="text-4xl font-bold text-white">{country.name}</h1>
          </div>
          <div className="flex items-center text-white/90">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{country.capital}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* About Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">{country.description}</p>
              <h3 className="text-xl font-semibold mb-3">History</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{country.history}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Flag className="w-5 h-5" />
                <span>Established: {country.established}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="w-5 h-5" />
                <span>Currency: {country.currency}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Languages className="w-5 h-5" />
                <span>Language: {country.language}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Timezone: {country.timezone}</span>
              </div>
            </div>
          </section>

          {/* Attractions Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Must-Visit Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {country.attractions.map((attraction) => (
                <div key={attraction.id} className="space-y-3">
                  <img
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{attraction.name}</h3>
                    <p className="text-gray-600 mt-1">{attraction.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{attraction.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Budget Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Travel Budget</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="text-gray-700">Daily Budget Range:</span>
                <span className="font-semibold text-blue-600">
                  {country.budget.low} - {country.budget.high} {country.budget.currency}
                </span>
              </div>
              <div className="grid gap-4">
                {Object.entries(country.budget.details).map(([category, detail]) => (
                  <div key={category} className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-gray-800 capitalize mb-1">{category}</h3>
                    <p className="text-gray-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Weather Widget */}
          {isLoadingWeather ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ) : weatherError ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-red-500">{weatherError}</p>
            </div>
          ) : weather ? (
            <WeatherWidget
              weather={weather}
              location={`${country.name}, ${country.capital}`}
            />
          ) : null}

          {/* Currency Converter */}
          <CurrencyConverter 
            baseCurrency={country.budget.currency}
            baseAmount={country.budget.low}
          />

          {/* Best Time to Visit */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Best Time to Visit</h2>
            <div className="space-y-4">
              {country.seasons.map((season) => (
                <div key={season.name} className="border-b last:border-0 pb-4">
                  <h3 className="font-semibold text-gray-800">{season.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{season.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {season.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Local Customs */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Local Customs</h2>
            <div className="space-y-4">
              {country.customs.map((custom) => (
                <div key={custom.title} className="border-b last:border-0 pb-4">
                  <h3 className="font-semibold text-gray-800">{custom.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{custom.description}</p>
                  <span className="inline-block mt-2 text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {custom.category}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};