import { memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import InfoCard from "../info-card/InfoCard";
import "./moreInfo.css";
import { WeatherContext } from "../../context/weather-context";
import {
  getHumidity,
  getMaxTemp,
  getminTemp,
  getSunrise,
  getSunset,
  getUvIndex,
  getVisibility,
  getWindDirDegree,
  getWindSpeed,
} from "../../utils";
import { DayContext } from "../../context/day-context";
import LineLoader from "../loaders/line-loader/LineLoader";
import ArcMeter from "../arc-meter/ArcMeter";
import { UnitContext } from "../../context/unit-context";

function MoreInfo() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cardReveal, setCardReveal] = useState<boolean>(false);
  const { weatherData } = useContext(WeatherContext);
  const { day } = useContext(DayContext);
  const { unit } = useContext(UnitContext);

  console.log(weatherData);

  const uvIndex = useMemo(() => getUvIndex(weatherData, day), [weatherData, day]);
  const humidity = useMemo(() => getHumidity(weatherData, day), [weatherData, day]);
  const visibility = useMemo(() => getVisibility(weatherData, day, unit), [weatherData, day, unit]);
  const sunrise = useMemo(() => getSunrise(weatherData, day), [weatherData, day]);
  const sunset = useMemo(() => getSunset(weatherData, day), [weatherData, day]);
  const maxTemp = useMemo(() => getMaxTemp(weatherData, day, unit), [weatherData, day, unit]);
  const minTemp = useMemo(() => getminTemp(weatherData, day, unit), [weatherData, day, unit]);
  const windSpeed = useMemo(() => getWindSpeed(weatherData, day, unit), [weatherData, day, unit]);
  const windDirDegree = useMemo(() => getWindDirDegree(weatherData, day), [weatherData, day]);

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
    };
  }, [isActive]);

  return (
    <>
      <motion.section
        id="more-info"
        className={`more-info ${isActive ? "active" : ""}`}
        animate={{ height: isActive ? "700px" : "40px", width: isActive ? "90%" : "90px" }}
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
                dataContent={weatherData == null ? <LineLoader /> : humidity}
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
                dataContent={weatherData == null ? <LineLoader /> : visibility}
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
                      sunrise: {sunrise}, sunset: {sunset}
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
                      Max: {maxTemp}, Min: {minTemp}
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
                      Wind speed: {windSpeed}, Wind direction degree: {windDirDegree}
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
