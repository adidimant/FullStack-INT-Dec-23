import { memo, ReactNode } from "react";
import { useWeatherContext } from '../../context/WeatherContext2';
import ForecastTable from "./components/ForecastTable";
import './WeatherForecast.css';

function WeatherForcast(): ReactNode {
    const { weatherResults, loading, error } = useWeatherContext();
    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;

    return (
        <div className="currentWeatherContainer">
            <div className="current-weather-top">
                <div className="current-weather-header">
                    {error && (
                        <div className="error-message">
                            <p>Error: {error}. Showing default data:</p>
                        </div>
                    )}
                    <h1>Weather forecast for {weatherResults.nearest_area[0].areaName[0].value}, {weatherResults.nearest_area[0].country[0].value}</h1>
                </div>
                <div className="weather-forecast">
                    <ForecastTable />
                </div>
            </div>
        </div>
    )
}

export default memo(WeatherForcast);