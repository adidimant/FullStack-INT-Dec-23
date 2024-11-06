import { memo, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { UnitContext } from "../../context/unit-context";
import { WeatherContext } from "../../context/weather-context";
import {
  getCityName,
  getCountryName,
  getDayName,
  getTemperature,
  getWeatherDescription,
  getWindSpeed,
  isNightTime,
} from "../../utils";
import { DayContext } from "../../context/day-context";
import WindSVG from "../SVGs/WindSVG";
import LineLoader from "../loaders/line-loader/LineLoader";
import WeatherIcon from "../weather-icon/WeatherIcon";
import "./sumCard.css";

function SumCard() {
  const { day } = useContext(DayContext);
  const { unit } = useContext(UnitContext);
  const { weatherData } = useContext(WeatherContext);

  const cityName = useMemo(() => getCityName(weatherData), [weatherData]);
  const countryName = useMemo(() => getCountryName(weatherData), [weatherData]);
  const dayName = useMemo(() => getDayName(weatherData, day), [weatherData, day]);
  const weatherDesc = useMemo(() => getWeatherDescription(weatherData, day), [weatherData, day]);
  const nightTime = useMemo(() => isNightTime(day), [day]);
  const temp = useMemo(() => getTemperature(weatherData, day, unit), [weatherData, day, unit]);
  const windSpeed = useMemo(() => getWindSpeed(weatherData, day, unit), [weatherData, day, unit]);

  if (!weatherData) {
    return (
      <div className="sum-card">
        <LineLoader />
      </div>
    );
  }

  if (weatherData == "not found") {
    return (
      <div className="sum-card">
        <h1 className="sum-card-not-found">Location could not be found.</h1>
      </div>
    );
  }

  if (weatherData == "api error") {
    return (
      <div className="sum-card">
        <h1 className="sum-card-not-found">
          There was a problem on our side :&#40;
          <br />
          <br />
          Please try again later!
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="sum-card">
        {!weatherData ? (
          <LineLoader />
        ) : (
          <>
            <motion.div
              className="sum-card-location"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="sum-card-city">{cityName}</div>
              <div className="sum-card-country">{countryName}</div>
            </motion.div>
            <motion.div
              className="sum-card-day"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {dayName instanceof Error ? "Error getting day" : dayName}
            </motion.div>
            <motion.div
              className="sum-card-condition-icon"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <WeatherIcon desc={weatherDesc} night={nightTime} className="sum-card-svg" />
            </motion.div>
            <motion.div
              className="sum-card-temp"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <span className="sum-card-temp-number">{temp == "-0" ? "0" : temp}</span>
              <span className="sum-card-temp-unit">{unit == "imperial" ? "°F" : "°C"}</span>
            </motion.div>
            <motion.div
              className="sum-card-condition-text"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {weatherDesc}
            </motion.div>
            <motion.div
              className="sum-card-wind"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <div className="sum-card-wind-icon">
                <WindSVG className="sum-card-wind-icon-img" />
              </div>
              <div className="sum-card-wind-text">
                <span className="sum-card-wind-number">{windSpeed}</span>
                <span className="sum-card-wind-unit">{unit == "imperial" ? "mph" : "kmh"}</span>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}

export default memo(SumCard);
