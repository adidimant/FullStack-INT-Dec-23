import { memo, useMemo } from "react";
import { useWeatherContext } from "../../../context/data-weather-context";
import "./WeatherBoxByDays.css";
import { useTempContext } from "../../../context/temp-context";
import getWeatherImg from "../ImgWeather";
import { Link } from "react-router-dom";

function getDayOfWeek(dateString: Date) {
    const date = new Date(dateString);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
}

function WeatherBoxByDays({ index }) {
    const { weatherData } = useWeatherContext();
    const { temp } = useTempContext();

    const day = useMemo(() => {
        return weatherData?.weather[index]?.date;
    }, [weatherData, index]);

    const weatherDescImg = useMemo(() => {
        const weatherDesc = weatherData?.weather[index]?.hourly?.[4]?.weatherDesc?.[0]?.value;;
        return getWeatherImg(weatherDesc);
    }, [weatherData, index])
    
    return (
        <div className="animated-box boxday">
            <div className="boxInternal">
                <div>
                    <div style={ {fontWeight: "600"} }>{day ? getDayOfWeek(day) : "N/A"}</div>
                    <div style={ {paddingBottom: "10px"} }>{day}</div>
                    <div>{`${weatherData?.weather[index][`mintemp${temp}`]}`}°/{`${weatherData?.weather[index][`maxtemp${temp}`]}`}°</div>
                    <Link to={`/${day}`}>Hourly data</Link>
                </div>
                <div><img src={weatherDescImg} alt={weatherData?.weather[index]?.hourly?.[4]?.weatherDesc?.[0]?.value} style={{ height: '50px' }} /></div>
            </div>
            
        </div>
    );
}

export default memo(WeatherBoxByDays);
