import { memo, useCallback, useState } from "react";
import "./MainWeather.css";
import WeatherStarterBox from "./WeatherStarterBox/WeatherStarterBox";
import { useWeatherContext } from "../../context/data-weather-context";
import DetailedWeather from "./Tabledata/DetailedWeather/DetailedWeather";
import Button from "../AuthPageNavber/component/button/button";
import WeatherBoxByDays from "./WeatherBoxByDays/WeatherBoxByDays";




function MainWeather() {
    const { weatherData } = useWeatherContext();
    const [isVisible, setIsVisible] = useState(false);
    

    const visible = useCallback(() => {
        setIsVisible(prevState => !prevState)
    } ,[])

    return (
        <>
        <div className="container">
            <WeatherStarterBox/>
            <div className="flexDay">
            {weatherData?.weather &&
                weatherData.weather.map((_, index) => (
                    <WeatherBoxByDays key={index} index={index} />
                ))
            }
            </div>
            {isVisible && (
                <DetailedWeather />
            )}
            <Button onClick={visible} width={"200px"}>{isVisible? "More details" : "Hide data"}</Button>
            
        </div>
        <div className="bottom">byfy</div>
        </>
    )
}

export default memo(MainWeather)