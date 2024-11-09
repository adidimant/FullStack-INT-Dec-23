import { memo } from "react";
import { useWeatherContext } from "../../../context/data-weather-context";
import { useTempContext } from "../../../context/temp-context";
import "./WeatherStarterBox.css";
import getWeatherImg from "../ImgWeather";
import { OrbitProgress } from "react-loading-indicators";



function WeatherStarterBos () {
    const { weatherData } = useWeatherContext();
    const { temp } = useTempContext();

    return (
        <div className="animated-box containerBox1">
            {weatherData ? (
         <div>
              <div className="title1">
                <div className="temp">{`${weatherData.current_condition[0][`temp_${temp}`]}`}°</div>
                <div className="area">{`${weatherData?.nearest_area?.[0]?.areaName?.[0]?.value || "N/A"}, ${weatherData?.nearest_area?.[0]?.country?.[0]?.value || "N/A"}`}</div>
              </div>
              <div className="box">
              <div className="WeatherDescription">
              <div className="value">{weatherData.current_condition[0].weatherDesc[0].value}</div>
              <div className="maxTemp">{`Day -   ${weatherData.weather[0][`maxtemp${temp}`]}`}°</div>
              <div className="minTemp">{`Night -   ${weatherData.weather[0][`mintemp${temp}`]}`}°</div>
              </div>
              <div className="imgIcon"><img 
                    src={getWeatherImg(weatherData.current_condition[0].lang_he[0].value)} 
                    alt="Weather Icon" /></div>
              </div>
        </div>

      ) : (
        <OrbitProgress color="#053e51" size="medium" text="" textColor="" />
              )}
           
        </div>
    )
}

export default memo(WeatherStarterBos);