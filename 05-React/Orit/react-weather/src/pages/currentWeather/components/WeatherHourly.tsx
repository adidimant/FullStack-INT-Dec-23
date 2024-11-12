import { memo, ReactNode } from "react";
import WeatherBox from "./WeatherBox";
import { useWeatherContext } from '../../../context/WeatherContext2';
import './WeatherHourly.css';

function WeatherHourly(): ReactNode {
    const { weatherResults, loading, error } = useWeatherContext();
    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;

    return (
        <>
        <div className="weather-hourly-container" id="hourly">
            <h3 className="weather-hourly-title">The weather forecast for upcoming hours:</h3>
            <div className="hours-container">
                <WeatherBox />
            </div>
        </div>
        </>
    )
}

export default memo(WeatherHourly);