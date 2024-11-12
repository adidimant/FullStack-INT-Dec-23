import { memo, ReactNode, useMemo, useState, Suspense, lazy } from "react";
import Utils from "../../../utils/Utils";
import { useWeatherContext } from '../../../context/WeatherContext2';
import { useScaleContext } from "../../../context/ScaleContext";
//import CurrentTimeDisplay from "./CurrentTimeDisplay";
const CurrentTimeDisplay = lazy(() => import("./CurrentTimeDisplay"));
import './WeatherTable.css';

function WeatherTable(): ReactNode {
    const { distScale } = useScaleContext();
    const { weatherResults, loading, error } = useWeatherContext();
    const [showAdvanced, setShowAdvanced] = useState(false);

    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;

    const toggleAdvancedFields = () => setShowAdvanced(prev => !prev);

    const nearestArea = useMemo(() => weatherResults.nearest_area[0], [weatherResults]);
    const currentCondition = useMemo(() => weatherResults.current_condition[0], [weatherResults]);

    return (
        <div className="weatherTable">
            <button onClick={toggleAdvancedFields}>
                {showAdvanced ? "Hide Advanced Fields" : "Show Advanced Fields"}
            </button>
            <table className="table table--left table--inner-borders-rows">
                <tbody>
                    <tr>
                        <th>Location: </th>
                        <td>{nearestArea.areaName[0].value}</td>
                    </tr>
                    <tr>
                        <Suspense fallback={<>
                            <th>Current Time: </th>
                            <td>loading current time...</td>
                            </>}>
                            <CurrentTimeDisplay />
                        </Suspense>
                    </tr>
                    <tr>
                        <th>Latest Observation: </th>
                        <td>{Utils.formatDate(currentCondition.localObsDateTime)}</td>
                    </tr>
                    <tr>
                        <th>Visibility: </th>
                        <td>{distScale === 'Km' ? currentCondition.visibility : currentCondition.visibilityMiles} {distScale}</td>
                    </tr>
                    <tr>
                        <th>Humidity: </th>
                        <td>{currentCondition.humidity}%</td>
                    </tr>
                    <tr>
                        <th>UV Index: </th>
                        <td>{currentCondition.uvIndex}</td>
                    </tr>
                    <tr>

                        <th>Cloud Cover: </th>
                        <td>{currentCondition.cloudcover}</td>
                    </tr>
                    {showAdvanced && (
                        <>
                            <tr>
                                <th>Sunrise: </th>
                                <td>{Utils.formatTime24(weatherResults.weather[0].astronomy[0].sunrise)}</td>
                            </tr>
                            <tr>
                                <th>Sunset: </th>
                                <td>{Utils.formatTime24(weatherResults.weather[0].astronomy[0].sunset)}</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default memo(WeatherTable);