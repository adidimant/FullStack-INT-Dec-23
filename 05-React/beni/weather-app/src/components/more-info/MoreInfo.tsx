import { memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { WeatherContext } from "../../context/weather-context";
import { DayContext } from "../../context/day-context";
import { UnitContext } from "../../context/unit-context";
import { HourContext } from "../../context/hour-context";
import {
  getHumidity,
  getMaxTemp,
  getminTemp,
  getSunrise,
  getSunset,
  getUvIndex,
  getVisibility,
  getWindDirDegree,
  getWindDirectionCode,
  getWindSpeed,
} from "../../utils";
import HumiditySVG from "../SVGs/HumiditySVG";
import InfoCard from "../info-card/InfoCard";
import EyeSVG from "../SVGs/EyeSVG";
import LineLoader from "../loaders/line-loader/LineLoader";
import SunriseSVG from "../SVGs/SunriseSVG";
import SunsetSVG from "../SVGs/SunsetSVG";
import ThermometerHighSVG from "../SVGs/ThermometerHighSVG";
import ThermometerLowSVG from "../SVGs/ThermometerLowSVG";
import CompassSVG from "../SVGs/CompassSVG";
import WindSVG from "../SVGs/WindSVG";
import ArcMeter from "../arc-meter/ArcMeter";
import Meter from "../meter/Meter";
import "./moreInfo.css";

function MoreInfo() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cardReveal, setCardReveal] = useState<boolean>(false);
  const { weatherData } = useContext(WeatherContext);
  const { day } = useContext(DayContext);
  const { unit } = useContext(UnitContext);
  const { hour } = useContext(HourContext);

  const uvIndex = useMemo(() => getUvIndex(weatherData, day, hour), [weatherData, day, hour]);
  const humidity = useMemo(() => getHumidity(weatherData, day, hour), [weatherData, day, hour]);
  const visibility = useMemo(
    () => getVisibility(weatherData, day, unit, hour),
    [weatherData, day, unit, hour]
  );
  const sunrise = useMemo(() => getSunrise(weatherData, day), [weatherData, day]);
  const sunset = useMemo(() => getSunset(weatherData, day), [weatherData, day]);
  const maxTemp = useMemo(() => getMaxTemp(weatherData, day, unit), [weatherData, day, unit]);
  const minTemp = useMemo(() => getminTemp(weatherData, day, unit), [weatherData, day, unit]);
  const windSpeed = useMemo(
    () => getWindSpeed(weatherData, day, unit, hour),
    [weatherData, day, unit, hour]
  );
  const windDirDegree = useMemo(
    () => getWindDirDegree(weatherData, day, hour),
    [weatherData, day, hour]
  );
  const windDirCode = useMemo(() => getWindDirectionCode(windDirDegree), [windDirDegree]);

  const handleMoreInfoToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    const moreInfoElement = document.getElementById("more-info");
    if (moreInfoElement) {
      moreInfoElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    if (!isActive) {
      setCardReveal(false);
    }

    const timeout = setTimeout(() => {
      if (!isActive) {
        clearTimeout(timeout);
        return;
      }
      setCardReveal(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [isActive, isSmallScreen]);

  return (
    <>
      <motion.section
        id="more-info"
        className={`more-info ${isActive ? "active" : ""}`}
        animate={{
          height: isActive ? (isSmallScreen ? "2000px" : "700px") : "40px",
          width: isActive ? "90%" : "90px",
        }}
        transition={{ duration: 0.4 }}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="more-info-top">
          <button className="more-info-btn" onClick={handleMoreInfoToggle}>
            More Info
          </button>
        </div>

        {cardReveal && (
          <motion.div
            className="more-info-bottom"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.55,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="info-card-container"
              variants={{
                hidden: { y: "10%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <InfoCard
                cardClassName="info-card"
                dataTitle="Uv index"
                dataContent={weatherData == null ? <LineLoader /> : <ArcMeter value={uvIndex} />}
              />
            </motion.div>
            <motion.div
              className="info-card-container"
              variants={{
                hidden: { y: "10%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <InfoCard
                cardClassName="info-card"
                dataTitle="Humidity"
                dataContent={
                  weatherData == null ? (
                    <LineLoader />
                  ) : (
                    <>
                      <div className="humidity-card-content">
                        <div className="humidity-card-info">
                          <div className="humidity-card-info-svg-container">
                            <HumiditySVG className="humidity-card-info-svg" />
                          </div>
                          <div className="humidity-card-info-number">{humidity}</div>
                          <div className="humidity-card-info-percentage">
                            {humidity !== "N/A" ? "%" : ""}
                          </div>
                        </div>
                        <Meter value={humidity} />
                      </div>
                    </>
                  )
                }
              />
            </motion.div>
            <motion.div
              className="info-card-container"
              variants={{
                hidden: { y: "10%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <InfoCard
                cardClassName="info-card"
                dataTitle="Visibility"
                dataContent={
                  weatherData == null ? (
                    <LineLoader />
                  ) : (
                    <>
                      <div className="visibility-card-content">
                        <div className="visibility-card-info-svg-container">
                          <EyeSVG className="visibility-card-info-svg" />
                        </div>
                        <div className="visibility-card-info-number">{visibility}</div>
                        <div className="visibility-card-info-unit">
                          {visibility !== "N/A" ? (unit == "imperial" ? "Miles" : "Km") : ""}
                        </div>
                      </div>
                    </>
                  )
                }
              />
            </motion.div>
            <motion.div
              className="info-card-container"
              variants={{
                hidden: { y: "10%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <InfoCard
                cardClassName="info-card"
                dataTitle="Sunrise & Sunset"
                dataContent={
                  weatherData == null ? (
                    <LineLoader />
                  ) : (
                    <>
                      <div className="sunrise-sunset-card-content">
                        <div className="sunrise-container">
                          <div className="sunrise-svg-container">
                            <SunriseSVG className="sunrise-svg" />
                          </div>
                          <div className="sunrise-hour">{sunrise}</div>
                        </div>
                        <div className="sunset-container">
                          <div className="sunset-svg-container">
                            <SunsetSVG className="sunset-svg" />
                          </div>
                          <div className="sunset-hour">{sunset}</div>
                        </div>
                      </div>
                    </>
                  )
                }
              />
            </motion.div>
            <motion.div
              className="info-card-container"
              variants={{
                hidden: { y: "10%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <InfoCard
                cardClassName="info-card"
                dataTitle="Max & Min Temperature"
                dataContent={
                  weatherData == null ? (
                    <LineLoader />
                  ) : (
                    <>
                      <div className="minmax-temp-card-content">
                        <div className="max-temp-container">
                          <div className="max-temp-svg-container">
                            <ThermometerHighSVG className="max-temp-svg" />
                          </div>
                          <div className="max-temp-text-container">
                            <div className="max-temp-text">{maxTemp}</div>
                            <div className="max-temp-unit">
                              {maxTemp == "N/A" ? "" : unit == "imperial" ? "°F" : "°C"}
                            </div>
                          </div>
                        </div>

                        <div className="min-temp-container">
                          <div className="min-temp-svg-container">
                            <ThermometerLowSVG className="min-temp-svg" />
                          </div>
                          <div className="min-temp-text-container">
                            <div className="min-temp-text">{minTemp}</div>
                            <div className="min-temp-unit">
                              {minTemp == "N/A" ? "" : unit == "imperial" ? "°F" : "°C"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
              />
            </motion.div>
            <motion.div
              className="info-card-container"
              variants={{
                hidden: { y: "10%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <InfoCard
                cardClassName="info-card"
                dataTitle="Wind Status"
                dataContent={
                  weatherData == null ? (
                    <LineLoader />
                  ) : (
                    <>
                      <div className="wind-status-card-content">
                        <div className="wind-speed-container">
                          <div className="wind-svg-container">
                            <WindSVG className="wind-svg" />
                          </div>
                          <div className="wind-speed-text-container">
                            <div className="wind-speed-number">{windSpeed}</div>
                            <div className="wind-speed-unit">
                              {windSpeed == "N/A" ? "" : unit == "imperial" ? "Mp/h" : "Kmp/h"}
                            </div>
                          </div>
                        </div>
                        <div className="wind-direction-container">
                          <div className="compass-svg-container">
                            <CompassSVG className="compass-svg" rotation={windDirDegree} />
                          </div>
                          <div className="wind-direction-text-container">
                            <div className="wind-direction-degree">{windDirDegree}</div>
                            <div className="wind-direction-code">
                              {windDirCode == "N/A" ? "" : windDirCode}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
              />
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    </>
  );
}

export default memo(MoreInfo);
