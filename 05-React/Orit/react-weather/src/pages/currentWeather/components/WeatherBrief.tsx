import { memo, ReactNode } from "react";
import { useWeatherContext } from '../../../context/WeatherContext2';
import { useScaleContext } from "../../../context/ScaleContext";
import { weatherIconMap } from '../../../types/WeatherIcons';
import './WeatherBrief.css';

function WeatherBrief(): ReactNode {
    const { tempScale, distScale } = useScaleContext();
    const { weatherResults, loading, error } = useWeatherContext();
    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;

    const icon = weatherIconMap[Number(weatherResults.current_condition[0].weatherCode)];

    return (
       <div className="weather-brief">
            <h3>Now</h3>
            <div className="icon">
                <img id="cur-weather" className="" title={weatherResults.current_condition[0].weatherDesc[0].value} src={`/assets/icons/${icon}.svg`} alt="Weather icon" width="80" height="80" />
            </div>
            <div className="h2">{weatherResults.current_condition[0][`temp_${tempScale}`]}&nbsp;°{tempScale}</div>
            <p>{weatherResults.current_condition[0].weatherDesc[0].value}</p>
            <br />
            <p>Feels Like: {weatherResults.current_condition[0][`FeelsLike${tempScale}`]}&nbsp;°{tempScale}
                <br/>
                <span title="High and low forecasted temperature today">
                    Forecast: {weatherResults.weather[0][`maxtemp${tempScale}`]} / {weatherResults.weather[0][`mintemp${tempScale}`]}&nbsp;°{tempScale}</span>
                <br/>
                Wind: {distScale == 'Km'? weatherResults.current_condition[0].windspeedKmph : weatherResults.current_condition[0].windspeedMiles} {distScale}/h 
            </p>
        </div>
    )
}

export default memo(WeatherBrief);