import { ChangeEvent, FormEvent, memo, useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { UnitContext } from "../../context/unit-context";
import { WeatherContext } from "../../context/weather-context";
import { DayContext } from "../../context/day-context";
import { HourContext } from "../../context/hour-context";
import Switch from "../switch/Switch";
import SearchSVG from "../SVGs/SearchSVG";
import SunSVG from "../SVGs/SunSVG";
import MoonSVG from "../SVGs/MoonSVG";
import "./navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { unit, toggleUnit } = useContext(UnitContext);
  const { setCity } = useContext(WeatherContext);
  const { day } = useContext(DayContext);
  const { hour, changeHour } = useContext(HourContext);

  const [selectedHour, setSelectedHour] = useState<string>(hour);

  const handleSelectHour = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(e.target.value);
    changeHour(e.target.value);
  };

  const handleSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const searchInput = e.currentTarget.querySelector("#location") as HTMLInputElement;
      setCity(searchInput.value);
    },
    [setCity]
  );

  const handleMenuClick = useCallback(() => {
    (document.querySelector(".navbar-left") as HTMLDivElement).classList.toggle("active");
    (document.querySelector(".navbar-menu-btn-top-line") as HTMLDivElement).classList.toggle(
      "active"
    );
    (document.querySelector(".navbar-menu-btn-middle-line") as HTMLDivElement).classList.toggle(
      "active"
    );
    (document.querySelector(".navbar-menu-btn-bottom-line") as HTMLDivElement).classList.toggle(
      "active"
    );
  }, []);

  useEffect(() => {
    if (day !== 1 && hour == "currently") {
      setSelectedHour("1200");
      changeHour("1200");
    }
  }, [day, hour, changeHour]);

  return (
    <>
      <nav id="navbar">
        <button className="navbar-menu-btn" onClick={handleMenuClick}>
          <div className="navbar-menu-btn-top-line"></div>
          <div className="navbar-menu-btn-middle-line"></div>
          <div className="navbar-menu-btn-bottom-line"></div>
        </button>
        <div className="navbar-left">
          <div className="navbar-links-container">
            <NavLink to="/" className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>
              Today
            </NavLink>
            <NavLink
              to="/tomorrow"
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            >
              Tomorrow
            </NavLink>
            <NavLink
              to="/in-2-days"
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            >
              In 2 Days
            </NavLink>
          </div>

          <div className="navbar-hour-select-container">
            <select name="hour" id="hour" value={selectedHour} onChange={handleSelectHour}>
              {day == 1 && <option value="currently">Current</option>}
              <option value="00">00:00</option>
              <option value="300">03:00</option>
              <option value="600">06:00</option>
              <option value="900">09:00</option>
              <option value="1200">12:00</option>
              <option value="1500">15:00</option>
              <option value="1800">18:00</option>
              <option value="2100">21:00</option>
            </select>
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-search-container">
            <div className="search-icon">
              <SearchSVG className="search-svg" />
            </div>
            <form onSubmit={handleSearch} className="search-input-form">
              <input
                className="search-input"
                type="search"
                id="location"
                name="location"
                autoComplete="off"
                placeholder="Search.."
              />
            </form>
          </div>

          <div className="navbar-btns-container">
            <div className="navbar-unit-container">
              <Switch
                textA="°C"
                textAClassName="navbar-unit-text"
                textB="°F"
                textBClassName="navbar-unit-text"
                active={unit == "imperial" ? "active" : ""}
                clickFn={toggleUnit}
              />
            </div>

            <div className="navbar-theme-container">
              <Switch
                childrenA={<SunSVG className="theme-svg" />}
                childrenB={<MoonSVG className="theme-svg" />}
                active={`${theme == "light" ? "active" : ""}`}
                clickFn={toggleTheme}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
