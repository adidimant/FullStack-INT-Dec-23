import { memo, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { UnitContext } from "../../context/unit-context";
import { WeatherContext } from "../../context/weather-context";
import { DayContext } from "../../context/day-context";
import { HourContext } from "../../context/hour-context";
import {
  getCityName,
  getCountryName,
  getDayName,
  getTemperature,
  getWeatherDescCode,
  getWeatherDescription,
  isNightTime,
} from "../../utils";
import LineLoader from "../loaders/line-loader/LineLoader";
import WeatherIcon from "../weather-icon/WeatherIcon";
import "./sumCard.css";

function SumCard() {
  const { day } = useContext(DayContext);
  const { unit } = useContext(UnitContext);
  const { weatherData } = useContext(WeatherContext);
  const { hour } = useContext(HourContext);

  const cityName = useMemo(() => getCityName(weatherData), [weatherData]);
  const countryName = useMemo(() => getCountryName(weatherData), [weatherData]);
  const dayName = useMemo(() => getDayName(weatherData, day), [weatherData, day]);
  const weatherDesc = useMemo(
    () => getWeatherDescription(weatherData, day, hour),
    [weatherData, day, hour]
  );
  const weatherCode = useMemo(
    () => getWeatherDescCode(weatherData, day, hour),
    [weatherData, day, hour]
  );
  const nightTime = useMemo(() => isNightTime(hour), [hour]);
  const temp = useMemo(
    () => getTemperature(weatherData, day, unit, hour),
    [weatherData, day, unit, hour]
  );

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
              className="sum-card-day"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {dayName instanceof Error ? "Error getting day" : dayName}
            </motion.div>
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
              className="sum-card-condition-icon"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <WeatherIcon code={weatherCode} night={nightTime} className="sum-card-svg" />
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
              className="sum-card-temp"
              initial={{ y: "20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <span className="sum-card-temp-number">{temp == "-0" ? "0" : temp}</span>
              <span className="sum-card-temp-unit">{unit == "imperial" ? "°F" : "°C"}</span>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}

export default memo(SumCard);
