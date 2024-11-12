import { memo, ReactNode, useMemo, useState, useEffect } from "react";
import { fetchTimeData } from "../../../api";
import Utils from "../../../utils/Utils";
import { useWeatherContext } from "../../../context/WeatherContext2";

function CurrentTimeDisplay(): ReactNode {
    const [currentTime, setCurrentTime] = useState<string | null>(null);
    const [timeError, setError] = useState<string | null>(null);
    const { weatherResults, loading, error } = useWeatherContext();

    if (loading) return <p>Loading weather data...</p>;
    if (!weatherResults) return <p>No data available</p>;
    if (error && !weatherResults) return <p>Error: {error}</p>;
    const latitude = useMemo(() => weatherResults.nearest_area[0].latitude, [weatherResults]);
    const longitude = useMemo(() => weatherResults.nearest_area[0].longitude, [weatherResults]);

    useEffect(() => {
        const getTimeData = async () => {
          try {
            const timeData = await fetchTimeData(latitude, longitude, setError);
            setCurrentTime(`${Utils.convertDateToDDMM(timeData.date)} ${timeData.time}`);
          } catch (err) {
            console.error(err);
            setError('Failed to fetch time data');
          }
        };

        getTimeData();
    }, [latitude, longitude]);

    if (timeError) return <p>{timeError}</p>;

    return (
        <>
            <th>Current Time: </th>
            <td>{currentTime}</td>
        </>
    );
}

export default memo(CurrentTimeDisplay);