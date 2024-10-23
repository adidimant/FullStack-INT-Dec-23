import { memo, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../../context/theme-context";
import Switch from "../../../switch/Switch";
import day from "../../../../figma-svgs/day.svg";
import night from "../../../../figma-svgs/night.svg";
import "./navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav id="navbar">
        <div className="navbar-links-container">
          <NavLink to="/" className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>
            Today
          </NavLink>
          <NavLink
            to="/week"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Week
          </NavLink>
        </div>

        <div className="navbar-btns-container">
          <div className="navbar-unit-container">
            <Switch textA="°C" textB="°F" />
          </div>

          <div className="navbar-theme-container">
            <Switch
              imgA={day}
              imgB={night}
              classNameA={`${theme == "light" ? "active" : ""}`}
              classNameB={`${theme == "dark" ? "active" : ""}`}
              clickFn={toggleTheme}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
