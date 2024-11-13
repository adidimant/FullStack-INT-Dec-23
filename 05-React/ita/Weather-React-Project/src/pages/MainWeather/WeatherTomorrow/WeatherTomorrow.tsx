import HourlyForecast from "../Tabledata/HourlyForecast/HourlyForecast";
import "../MainWeather.css"
import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useWeatherContext } from "../../../context/data-weather-context";



function WeatherTomorrow() {
    const { date } = useParams();
    const { weatherData } = useWeatherContext();

    const index = useMemo(() =>  weatherData?.weather.findIndex(day => day.date === date)
    , [weatherData, date]) ;

    return (
        <div className="container">
            {index !== -1 ? (
                <HourlyForecast index={index} />
            ) : (
                <p>Date not found</p>
            )}
        </div>
    )
}

export default memo(WeatherTomorrow)