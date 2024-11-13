import { memo, useCallback, useMemo } from "react"
import TableData from "../TableData";
import { useTempContext } from "../../../../context/temp-context";
import { useWeatherContext } from "../../../../context/data-weather-context";
import getWeatherImg from "../../ImgWeather";
import "./HourlyForecast.css";
  
type HourlyForecastProp = {
  index: number;
}

function convertMinutesToTime(time: number) {
  const hour = parseInt(time, 10);
  const isPM = hour >= 1200;
  const formattedHour = (hour % 1200) / 100 || 12;
  const period = isPM ? 'PM' : 'AM';
  return `${formattedHour}:00 ${period}`;
}

function HourlyForecast({ index }: HourlyForecastProp) {
    const { temp } = useTempContext();
    const { weatherData } = useWeatherContext();

    const hourly = useMemo(() => weatherData?.weather[index]?.hourly
    , [weatherData, index]);

    
    if (!hourly) return null;

    return (
        <TableData title={`Hourly weather in ${weatherData?.nearest_area?.[0]?.areaName?.[0]?.value || 'Unknown City'} - ${weatherData.weather[index].date}`}>
      <table>
        <tbody>
          {hourly.map((hour, index) => {
            const description = hour.weatherDesc[index]?.value || 'N/A';
            const imgPath = getWeatherImg(description);

            return (
              <tr key={index}>
                <td>{convertMinutesToTime((hour.time))}</td>
                <td>{`${hour[`temp${temp}`]}°`}</td>
                <td><img src={imgPath} alt={description} style={{ height: '35px' }} /></td>
                <td>{hour.humidity}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableData>
    )
     
}

export default memo(HourlyForecast)