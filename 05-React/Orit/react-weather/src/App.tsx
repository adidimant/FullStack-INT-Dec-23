import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Header from "./pages/components/Header";
import CurrentWeather from "./pages/currentWeather/CurrentWeather";
import WeatherForecast from "./pages/weatherForecast/WeatherForecast";
import Contact from './pages/Contact/Contact';
import { WeatherProvider } from './context/WeatherContext2';
import { ScaleProvider } from './context/ScaleContext';
import './App.css';
import { ReactNode } from 'react';

function App(): ReactNode {
  return (
    <div className='app'>
      <WeatherProvider>
        <BrowserRouter>
          <Header />
          <div className='page-container'>
            <ScaleProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<CurrentWeather />} />
                <Route path="/hourly" element={<WeatherForecast />} />
                <Route path="/weatherForecast" element={<WeatherForecast />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </ScaleProvider>
          </div>
        </BrowserRouter>
      </WeatherProvider>
    </div>
  );
}

export default App;