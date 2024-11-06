import { memo, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { UnitContext } from "../../context/unit-context";
import { WeatherContext } from "../../context/weather-context";
import { WeatherApiResponse } from "../../types/weatherApiTypes";
import { convertDayNumToDayName } from "../../utils";
import { DayContext } from "../../context/day-context";
import WindSVG from "../SVGs/WindSVG";
import LineLoader from "../loaders/line-loader/LineLoader";
import WeatherIcon from "../weather-icon/WeatherIcon";
import "./sumCard.css";

function SumCard() {
  const { day } = useContext(DayContext);
  const { unit } = useContext(UnitContext);
  const { weatherData } = useContext(WeatherContext);
  const weatherDataExists = useMemo(() => {
    if (weatherData == "api error" || weatherData == "not found" || weatherData == null) {
      return false;
    } else return true;
  }, [weatherData]);

  const cityName = useMemo(() => {
    if (!weatherDataExists) {
      return;
    }
    let location = "";
    try {
      location = (weatherData as WeatherApiResponse).nearest_area[0].areaName[0].value;
    } catch (err) {
      location = "N/A";
      console.error("Can't find location object", err);
    }
    return location;
  }, [weatherDataExists, weatherData]);

  const countryName = useMemo(() => {
    if (!weatherDataExists) {
      return;
    }
    let location = "";
    try {
      location = (weatherData as WeatherApiResponse).nearest_area[0].country[0].value;
    } catch (err) {
      location = "N/A";
      console.error("Can't find location object", err);
    }

    return location;
  }, [weatherDataExists, weatherData]);

  const dayName = useMemo(() => {
    if (!weatherDataExists) {
      return;
    }

    let dateString = "";
    let name: string | Error = "";

    try {
      if (day == 1) {
        dateString = (weatherData as WeatherApiResponse).weather[0].date;
      } else if (day == 2) {
        dateString = (weatherData as WeatherApiResponse).weather[1].date;
      } else if (day == 3) {
        dateString = (weatherData as WeatherApiResponse).weather[2].date;
      }

      const date = new Date(dateString);
      const dayNumber = date.getDay();
      name = convertDayNumToDayName(dayNumber);
    } catch (err) {
      name = "N/A";
      console.error("Couldnt find date object:", err);
    }
    return name;
  }, [weatherDataExists, weatherData, day]);

  const temp = useMemo(() => {
    if (!weatherDataExists) {
      return;
    }
    let tempInfo = "";
    try {
      if (unit == "imperial") {
        if (day == 1) {
          tempInfo = (weatherData as WeatherApiResponse).current_condition[0].temp_F;
        } else if (day == 2) {
          tempInfo = (weatherData as WeatherApiResponse).weather[1].avgtempF;
        } else if (day == 3) {
          tempInfo = (weatherData as WeatherApiResponse).weather[2].avgtempF;
        }
      } else if (unit == "metric") {
        if (day == 1) {
          tempInfo = (weatherData as WeatherApiResponse).current_condition[0].temp_C;
        } else if (day == 2) {
          tempInfo = (weatherData as WeatherApiResponse).weather[1].avgtempC;
        } else if (day == 3) {
          tempInfo = (weatherData as WeatherApiResponse).weather[2].avgtempC;
        }
      }
    } catch (err) {
      tempInfo = "N/A";
      console.error("Couldnt get temp object:", err);
    }
    return tempInfo;
  }, [day, unit, weatherData, weatherDataExists]);

  const windSpeed = useMemo(() => {
    if (!weatherDataExists) {
      return;
    }
    let windSpeedInfo = "";
    try {
      if (unit == "imperial") {
        if (day == 1) {
          windSpeedInfo = (weatherData as WeatherApiResponse).current_condition[0].windspeedMiles;
        } else if (day == 2) {
          windSpeedInfo = (weatherData as WeatherApiResponse).weather[1].hourly[4].windspeedMiles;
        } else if (day == 3) {
          windSpeedInfo = (weatherData as WeatherApiResponse).weather[2].hourly[4].windspeedMiles;
        }
      } else if (unit == "metric") {
        if (day == 1) {
          windSpeedInfo = (weatherData as WeatherApiResponse).current_condition[0].windspeedKmph;
        } else if (day == 2) {
          windSpeedInfo = (weatherData as WeatherApiResponse).weather[1].hourly[4].windspeedKmph;
        } else if (day == 3) {
          windSpeedInfo = (weatherData as WeatherApiResponse).weather[2].hourly[4].windspeedKmph;
        }
      }
    } catch (err) {
      windSpeedInfo = "N/A";
      console.error("Couldnt get wind object:", err);
    }
    return windSpeedInfo;
  }, [day, unit, weatherDataExists, weatherData]);

  const weatherDesc = useMemo(() => {
    if (!weatherDataExists) {
      return;
    }
    let weatherDescInfo = "";
    try {
      if (day == 1) {
        weatherDescInfo = (weatherData as WeatherApiResponse).current_condition[0].weatherDesc[0]
          .value;
      } else if (day == 2) {
        weatherDescInfo = (weatherData as WeatherApiResponse).weather[1].hourly[4].weatherDesc[0]
          .value;
      } else if (day == 3) {
        weatherDescInfo = (weatherData as WeatherApiResponse).weather[2].hourly[4].weatherDesc[0]
          .value;
      }
      weatherDescInfo =
        weatherDescInfo.charAt(0).toUpperCase() + weatherDescInfo.slice(1).toLowerCase().trim();
    } catch (err) {
      weatherDescInfo = "N/A";
      console.error("Couldnt get weather info object:", err);
    }

    return weatherDescInfo;
  }, [day, weatherDataExists, weatherData]);

  const nightTime = useMemo(() => {
    if (day == 1) {
      const currentTime = new Date().getTime();
      if (currentTime > 6 && currentTime < 18) {
        return false;
      }
      return true;
    }
    return false;
  }, [day]);

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
              <div className="sum-card-city">{cityName && cityName}</div>
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
