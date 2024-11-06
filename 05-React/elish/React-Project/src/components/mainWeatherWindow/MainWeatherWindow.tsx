import { memo, ReactNode } from 'react';
import './MainWeatherWindow.css';

interface MainWeatherWindowProps {
  city?: string;
  data?: { icon: string; temp: string; weather_desc: string };
  children?: ReactNode;
}

const iconMap: { [key: string]: string } = {
  '113': '01d',  
  '116': '02d',
  '119': '03d',
  '122': '04d',
  '296': '09d',
  '299': '10d',
  '302': '11d',
  '338': '13d',
};

function MainWeatherWindow({ city, data, children }: MainWeatherWindowProps): JSX.Element {
  const Title = city ? null : <h1 className='title'>Weather Forecast</h1>;

  return (
    <div className='main'>
      <div className='inner-main'>
        {Title}
        <img
          src={data && iconMap[data.icon] ? `/assets/${iconMap[data.icon]}.svg` : '/assets/01d.svg'}
          alt='weather-icon'
          style={{
            visibility: city ? 'visible' : 'hidden',
            opacity: city ? '1' : '0'
          }}
        />
        <div
          className='today'
          style={{
            visibility: city ? 'visible' : 'hidden',
            opacity: city ? '1' : '0'
          }}
        >
          <span>Today</span>
          <h1>{city}</h1>
          <p>
            Temperature: {data ? Math.round(parseFloat(data.temp)) : 0} °C
          </p>
          <p>{data ? data.weather_desc.toLowerCase() : ''}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default memo(MainWeatherWindow);
