import React, { lazy, Suspense, useEffect } from 'react';
import { WeatherProvider, useWeather } from './context/WeatherContext';
import { mockWeatherData } from './utils/mockData';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import UnitToggle from './components/UnitToggle';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';

// Lazy load components that are not immediately visible
const DailyForecast = lazy(() => import('./components/DailyForecast'));
const AdvancedDetails = lazy(() => import('./components/AdvancedDetails'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

// Main app content component
const AppContent = () => {
  const { setWeatherData, setLocation } = useWeather();
  
  // Load mock data on initial render
  useEffect(() => {
    console.log('Loading mock data in App component');
    setWeatherData(mockWeatherData);
    
    if (mockWeatherData.nearest_area && mockWeatherData.nearest_area.length > 0) {
      const areaName = mockWeatherData.nearest_area[0].areaName[0].value;
      setLocation(areaName);
      console.log('Location set to:', areaName);
    }
  }, [setWeatherData, setLocation]);
  
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <SearchForm />
        <UnitToggle />
        <CurrentWeather />
        <HourlyForecast />
        
        <Suspense fallback={<LoadingFallback />}>
          <DailyForecast />
          <AdvancedDetails />
        </Suspense>
      </main>
      <footer className="app-footer">
        <p>Weather Forecast App &copy; {new Date().getFullYear()}</p>
        <p>Data provided by <a href="https://wttr.in" target="_blank" rel="noopener noreferrer">wttr.in</a></p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
}

export default App;
