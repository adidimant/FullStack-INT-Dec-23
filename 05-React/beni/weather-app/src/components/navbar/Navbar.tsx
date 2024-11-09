import { KeyboardEvent, memo, useCallback, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { UnitContext } from "../../context/unit-context";
import { WeatherContext } from "../../context/weather-context";
import Switch from "../switch/Switch";
import SearchSVG from "../SVGs/SearchSVG";
import SunSVG from "../SVGs/SunSVG";
import MoonSVG from "../SVGs/MoonSVG";
import "./navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { unit, toggleUnit } = useContext(UnitContext);
  const { setCity } = useContext(WeatherContext);

  const handleSearch = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code == "Enter") {
        setCity(e.currentTarget.value);
      }
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
        </div>

        <div className="navbar-right">
          <div className="navbar-search-container">
            <div className="search-icon">
              <SearchSVG className="search-svg" />
            </div>
            <input
              className="search-input"
              type="text"
              id="location"
              name="location"
              autoComplete="off"
              placeholder="Search location.."
              onKeyDown={handleSearch}
            />
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
