import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { WeatherProvider } from './context/data-weather-context';
import TempProvider from './context/temp-context';
import AuthPageNavber from './pages/AuthPageNavber/AuthPageNavber';
import MainWeather from './pages/MainWeather/MainWeather';
import WeatherTomorrow from './pages/MainWeather/WeatherTomorrow/WeatherTomorrow';





function App() {

  return (
    <>
    <WeatherProvider>
      <TempProvider>
        <BrowserRouter>
        <AuthPageNavber/>
         <Routes>
         <Route path="/" element={<MainWeather/>} />
         <Route path="/:date" element={<WeatherTomorrow />} />
         </Routes>
        </BrowserRouter>
      </TempProvider>
    </WeatherProvider>
     
    </>
  )
}

export default App
