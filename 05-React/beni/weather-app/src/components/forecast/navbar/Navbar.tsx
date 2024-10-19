import { memo } from "react";
import { NavLink } from "react-router-dom";
import Switch from "../../switch/Switch";
import day from "../../../figma-svgs/day.svg";
import night from "../../../figma-svgs/night.svg";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div className="navbar-links-container">
          <NavLink to="/" className={({ isActive }) => `today-link ${isActive ? "active" : ""}`}>
            Today
          </NavLink>
          <NavLink to="/week" className={({ isActive }) => `week-link ${isActive ? "active" : ""}`}>
            Week
          </NavLink>
        </div>

        <div className="navbar-btns-container">
          <div className="navbar-unit-container">
            <Switch textA="°C" textB="°F" />
          </div>

          <div className="navbar-theme-container">
            <Switch imgA={day} imgB={night} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
