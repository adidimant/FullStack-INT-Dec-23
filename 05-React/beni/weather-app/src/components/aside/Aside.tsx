import { memo } from "react";
import SearchSVG from "../icons/SearchSVG";
import partlyCloudy from "../../figma-svgs/partly-cloudy.svg";
import rainIcon from "../../figma-svgs/rain.svg";
import "./aside.css";
import Clock from "./components/clock/Clock";
import WeekDay from "./components/week-day/WeekDay";

function Aside() {
  return (
    <>
      <aside id="aside">
        <div className="search">
          <div className="search-icon">
            <SearchSVG />
          </div>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Search location.."
            className="search-input"
          />
        </div>

        <div className="aside-item">
          <div className="aside-location">
            <div className="aside-location-city">Tel Aviv</div>
            <div className="aside-location-state">Israel</div>
          </div>

          <div className="aside-weather-icon">
            <img src={partlyCloudy} className="aside-weather-icon-img" alt="Partly cloudy" />
          </div>

          <div className="aside-tmp">
            <div className="aside-tmp-n">
              12
              <span className="aside-tmp-unit">°C</span>
            </div>
          </div>

          <div className="aside-time">
            <span className="aside-day">
              <WeekDay />,{" "}
            </span>
            <span className="aside-clock">
              <Clock />
            </span>
          </div>
        </div>

        <div className="aside-item">
          <div className="aside-rain">
            <span className="aside-rain-icon">
              <img src={rainIcon} alt="Rain chances" className="aside-rain-img" />
            </span>
            <span className="aside-rain-text">Rain&nbsp;</span>
            <span className="aside-rain-percentage">- 50%</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default memo(Aside);
