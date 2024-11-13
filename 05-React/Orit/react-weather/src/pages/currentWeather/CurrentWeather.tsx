import { memo, ReactNode, lazy, Suspense } from "react";
import WeatherBrief from './components/WeatherBrief';
import { useWeatherContext } from '../../context/WeatherContext2';
import Utils from '../../utils/Utils'
import './CurrentWeather.css';

function CurrentWeather(): ReactNode {
    const { weatherResults, loading, error } = useWeatherContext();
    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;

    
    let date = '';

    if (weatherResults) {
        date = Utils.formatDate(weatherResults?.current_condition[0]?.localObsDateTime);
    }

    const WeatherTable = lazy(() => import('./components/WeatherTable'));
    const WeatherHourly = lazy(() => import('./components/WeatherHourly'));

    return (
        <div className="currentWeatherContainer">
            <div className="current-weather-top">
                <div className="current-weather-header">
                    {error && (
                        <div className="error-message">
                            <p style={{ color: 'red' }}>Error: {error}. Showing data for:</p>
                        </div>
                    )}
                    <h1>Current weather for {weatherResults.nearest_area[0].areaName[0].value}, {weatherResults.nearest_area[0].country[0].value}</h1>
                </div>
                <div className="current-weather">
                    <WeatherBrief />
                    <Suspense fallback={<p>Loading weather data...</p>}>
                        <WeatherTable />
                    </Suspense>
                </div>
            </div>
            <div className="current-weather-bottom">
            <Suspense fallback={<p>Loading hourly data...</p>}>
                <WeatherHourly />
            </ Suspense>
            </div>
        </div>
    )
}

export default memo(CurrentWeather);