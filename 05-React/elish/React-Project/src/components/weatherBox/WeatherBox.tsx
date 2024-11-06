import { memo, ReactNode } from 'react';
import './WeatherBox.css';

interface WeatherBoxProps {
  date: string;
  icon: string;
  temp: string;
}

const iconMap: { [key: string]: string } = {
    '113': '01d',  // "Sunny" -> 01d.svg
    '116': '02n',  // "Partly cloudy" -> 02d.svg
    '119': '03n',  // "Cloudy" -> 03d.svg
    '122': '04d',  // "Overcast" -> 04d.svg
    '296': '09d',  // "Light rain" -> 09d.svg
    '299': '10d',  // "Moderate rain" -> 10d.svg
    '302': '11d',  // "Heavy rain" -> 11d.svg
    '338': '13d',  // "Snow" -> 13d.svg
  };

function WeatherBox({ date, icon, temp }: WeatherBoxProps): ReactNode {
  const getDay = (date: string): string => {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[new Date(date).getDay()];
  };
  //console.log("Icon received from API:", icon);
  return (
    <div className='weather-box'>
      <h1>{date ? getDay(date) : ''}</h1>
      <img
        src={iconMap[icon] ? `/assets/${iconMap[icon]}.svg` : '/assets/01d.svg'}
        alt='weather-icon'
        />
      <span className='temp'>{Math.round(parseFloat(temp))}°C</span>
    </div>
  );
}

export default memo(WeatherBox);
