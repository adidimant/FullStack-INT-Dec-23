import { memo, ReactNode, useMemo } from "react";
import Utils from "../../../utils/Utils";
import { useWeatherContext } from '../../../context/WeatherContext2';
import { useScaleContext } from "../../../context/ScaleContext";
import { Hourly } from '../../../types/types';
import { weatherIconMap } from '../../../types/WeatherIcons';
import './WeatherBox.css';

// Function to filter the hourly data to show only times that are equal to or after the current time


function WeatherBox(): ReactNode {
    const { tempScale } = useScaleContext();
    const { weatherResults, loading, error } = useWeatherContext();
    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;

    const currentTime = Utils.currentTimeToNumber(new Date());

    const firstDayHours = useMemo(() => Utils.getFilteredHourlyData(weatherResults.weather[0].hourly, currentTime), [weatherResults]);
    const nextDayHours = useMemo(() => weatherResults.weather[1] ? weatherResults.weather[1].hourly : [], [weatherResults]);

    let displayedHours: Hourly[] = [];

    if (currentTime > 2100) {
        displayedHours = [...nextDayHours];  // Only display next day data
    } else {
        // Otherwise, show the filtered hours from the first day
        displayedHours = [...firstDayHours];

        // If there are not enough hours from the first day, add hours from the next day
        if (displayedHours.length < 8) {
            displayedHours = [...displayedHours, ...nextDayHours.slice(0, 8 - displayedHours.length)];
        }
    }

    return (
        <>
            {displayedHours.map((hour: Hourly, index: number) => {
                let icon: string;
                if (Number(hour.weatherCode) === 113 && (Number(hour.time) >= 2100 || Number(hour.time) < 600)) {
                    icon = 'wt-13';  // Show 'wt-13' icon when weatherCode is 113 and time is between 9:00 PM and 6:00 AM
                } else {
                    icon = weatherIconMap[Number(hour.weatherCode)] || 'default'; // Fallback icon if no match
                }
                return (
                    <div className="weatherBox" key={index}>
                        <div className="weatherBox-details">
                            <div className="icon">
                                <img id="cur-weather" className="" title={hour.weatherDesc[0].value} src={`/assets/icons/${icon}.svg`} alt="Weather icon" width="80" height="80" />
                            </div>
                            
                            <p>{hour[`temp${tempScale}`]}°{tempScale}</p>
                            <p>{hour.weatherDesc[0]?.value}</p>
                        </div>
                        <div className="weatherBox-time">{Utils.formatTime(hour.time)}</div>
                    </div>
                );
            })
            }
        </>
    )
}

export default memo(WeatherBox);