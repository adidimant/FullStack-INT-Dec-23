import { memo, useState } from 'react';
import MainWeatherWindow from './components/mainWeatherWindow/MainWeatherWindow';
import CityInput from './components/cityInput/CityInput';
import WeatherBox from './components/weatherBox/WeatherBox';
import { CurrentCondition, WeatherAPIResponse } from './typeApi';
import './App.css';

interface DayWeather {
  date: string;
  weather_desc: string;
  icon: string;
  temp: string;
}

function App(): JSX.Element {
  //console.log("App function loaded"); 
  const [city, setCity] = useState<string | undefined>(undefined);
  const [days, setDays] = useState<DayWeather[]>([]);
  const [loading, setLoading] = useState(false);

  // פונקציה שמבצעת קריאה ל-API לפי המיקום של המשתמש
  const fetchWeatherByLocation = async () => {
    console.log('fetchWeatherByLocation');
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
  
        const apiUrl = `https://wttr.in/Tel-Aviv?format=j1`; 
        console.log("Fetching weather for coordinates:", apiUrl);
  
        try {
          const response = await fetch(apiUrl);
          const data: WeatherAPIResponse = await response.json();
          console.log("Weather data:", data);
  
          updateState(data); 
          const cityName = data.nearest_area[0].areaName[0].value;  // קבלת שם העיר מה-API
          setCity(cityName);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        } finally {
          setLoading(false);
        }
      }, (error) => {
        console.error("Error fetching location:", error);
        setLoading(false);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  


  // פונקציה שמעדכנת את המצב עם הנתונים מה-API
  const updateState = (data: WeatherAPIResponse) => {
    const cityName = data.nearest_area[0].areaName[0].value;

    const updatedDays: DayWeather[] = data.weather.slice(0, 5).map((weather) => ({
      date: weather.date,
      weather_desc: weather.hourly[4].weatherDesc[0].value, // שעת צהריים (12:00)
      icon: weather.hourly[4].weatherCode,
      temp: weather.hourly[4].tempC
    }));

    console.log("Updated days for weather:", updatedDays); // לוג לבדוק את הנתונים המתקבלים
    setCity(cityName);  // עדכון שם העיר לפי הנתונים המתקבלים מה-API
    setDays(updatedDays);
  };

  // פונקציה שמבצעת קריאה ל-API לפי שם העיר
  const makeApiCall = async (city: string): Promise<CurrentCondition | null> => {
    try {
      const response = await fetch(
        `https://wttr.in/${city}?format=j1`
      );
      const api_data: WeatherAPIResponse = await response.json();
  
      if (api_data.current_condition) {
        updateState(api_data);
        return api_data.current_condition[0]; // החזרת ה-CurrentCondition
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  // פונקציה להצגת תחזית מזג האוויר בקופסאות
  const WeatherBoxes = () => {
    const weatherBoxes = days.slice(1).map((day, index) => (
      <li key={index}>
        <WeatherBox {...day} />
      </li>
    ));
    return <ul className='weather-box-list'>{weatherBoxes}</ul>;
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {loading && <p>Loading...</p>}
        <MainWeatherWindow data={days[0]} city={city}>
          <CityInput city={city} makeApiCall={makeApiCall} />
          <WeatherBoxes />
          <button className="button-location" onClick={fetchWeatherByLocation}>Get Weather by Location</button>
        </MainWeatherWindow>
      </header>
    </div>
  );
}

export default memo(App);
