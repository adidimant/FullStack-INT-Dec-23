import { memo, ReactNode, useState } from "react";
import { useWeatherContext } from '../../../context/WeatherContext2';
import { useScaleContext } from "../../../context/ScaleContext";
import { weatherIconMap } from '../../../types/WeatherIcons';
import DayNavigation from "./DayNavigation";
import Utils from "../../../utils/Utils";
import './ForecastTable.css';
import { Hourly } from "../../../types/types";

function ForecastTable(): ReactNode {
    const { tempScale, distScale } = useScaleContext();
    const { weatherResults, loading, error } = useWeatherContext();
    const [currentDayIndex, setCurrentDayIndex] = useState(1);
    const [showAdvanced, setShowAdvanced] = useState(false);

    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;

    const toggleAdvancedFields = () => setShowAdvanced(prev => !prev);

    const goToNextDay: () => void = () => {
        if (currentDayIndex < weatherResults.weather.length - 1) {
            setCurrentDayIndex(currentDayIndex + 1); // Move to the next day
        }
    };

    const goToPreviousDay: () => void = () => {
        if (currentDayIndex > 0) {
            setCurrentDayIndex(currentDayIndex - 1); // Move to the previous day
        }
    };

    const filteredHourlyData: Hourly[] = weatherResults.weather[currentDayIndex].hourly.filter((hour) => 
        hour.time === "0" || hour.time === "600" || hour.time === "1200" || hour.time === "1800"
    );

    return (
        <>
            <DayNavigation
                currentDayIndex={currentDayIndex}
                totalDays={weatherResults.weather.length}
                goToNextDay={goToNextDay}
                goToPreviousDay={goToPreviousDay}
            />
            <button className="advanced-fields" onClick={toggleAdvancedFields}>
                {showAdvanced ? "Hide Advanced Fields" : "Show Advanced Fields"}
            </button>
            <div className="table-container">
                <table className="forecast-table">
                    <thead>
                        <tr className="bg-wt">
                            <th className="leftHeader">&nbsp;</th>
                            <th colSpan={4}>{Utils.formatDateOnly(weatherResults.weather[currentDayIndex].date)}</th>
                        </tr>
                        <tr>
                            <th className="leftHeader">&nbsp;</th>
                            <th className="sep-l"><span title="Night means the time between 00:00 and 06:00">Night</span></th>
                            <th><span title="Morning means the time between 06:00 and 12:00">Morning</span></th>
                            <th><span title="Afternoon means the time between 12:00 and 18:00">Afternoon</span></th>
                            <th><span title="Evening means the time between 18:00 and 00:00">Evening</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="leftHeader">Forecast</th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index} className="">
                                    <div className="icon">
                                        <img className="" title={hour.weatherDesc[0].value} src={`/assets/icons/${weatherIconMap[Number(hour.weatherCode)]}.svg`} width="40" height="40" />
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th className="leftHeader">Temperature</th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index} className="">
                                    {hour[`temp${tempScale}`]} °{tempScale}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th className="leftHeader"></th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index}  className="">{hour.weatherDesc[0].value}</td>
                            ))}
                        </tr>
                        <tr>
                            <th className="leftHeader">Feels Like</th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index} className="">{hour[`FeelsLike${tempScale}`]}&nbsp;°{tempScale}</td>
                            ))}
                        </tr>
                        <tr>
                            <th className="leftHeader">Wind Speed</th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index} className="">{distScale == 'Km'? hour.windspeedKmph : hour.windspeedMiles} {distScale}/h</td>
                            ))}
                        </tr>
                        <tr>
                            <th className="leftHeader">Humidity</th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index}  className="">{hour.humidity}%</td>
                            ))}
                        </tr>
                        <tr>
                            <th className="leftHeader">Dew Point</th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index} className="">{hour[`DewPoint${tempScale}`]}&nbsp;°{tempScale}</td>
                            ))}
                        </tr>
                        <tr>
                            <th className="leftHeader">Visibility</th>
                            {filteredHourlyData.map((hour, index) => (
                                <td key={index} className="">{distScale == 'Km'? hour.visibility : hour.visibilityMiles} {distScale}</td>
                            ))}
                        </tr>
                        {showAdvanced && (
                            <>
                                <tr>
                                    <th className="leftHeader">Chance of Fog</th>
                                    {filteredHourlyData.map((hour, index) => (
                                        <td key={index} className="">{hour.chanceoffog}%</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className="leftHeader">Chance of Rain</th>
                                    {filteredHourlyData.map((hour, index) => (
                                        <td key={index} className="">{hour.chanceofrain}%</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className="leftHeader">Chance of Snow</th>
                                    {filteredHourlyData.map((hour, index) => (
                                        <td key={index} className="">{hour.chanceofsnow}%</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className="leftHeader">Chance of Thunder</th>
                                    {filteredHourlyData.map((hour, index) => (
                                        <td key={index} className="">{hour.chanceofthunder}%</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className="leftHeader">Chance of Sunshine</th>
                                    {filteredHourlyData.map((hour, index) => (
                                        <td key={index} className="">{hour.chanceofsunshine}%</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className="leftHeader">Chance of Windy</th>
                                    {filteredHourlyData.map((hour, index) => (
                                        <td key={index} className="">{hour.chanceofwindy}%</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th className="leftHeader">Wind direction</th>
                                    {filteredHourlyData.map((hour, index) => (
                                        <td key={index} className="">{hour.winddirDegree}°</td>
                                    ))}
                                </tr>
                            </>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5} className="tc">
                                <span className="img-caption">* Updated {Utils.formatDate(weatherResults.current_condition[0].localObsDateTime)} {weatherResults.nearest_area[0].areaName[0].value} time.</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <DayNavigation
                currentDayIndex={currentDayIndex}
                totalDays={weatherResults.weather.length}
                goToNextDay={goToNextDay}
                goToPreviousDay={goToPreviousDay}
            />
        </>
    )
}

export default memo(ForecastTable);