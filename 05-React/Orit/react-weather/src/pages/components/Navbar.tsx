import { memo, ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '/assets/logo.png';
import './Navbar.css';
import ScaleButton from "./ScaleButton";

function Navbar(): ReactNode {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Scroll to the element with the ID matching the hash
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // scroll to the top when there is no hash ("Now")
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

    const getLinkClass = (path: string, hash?: string): string => {
      // apply 'active' to the "Now" link if there is no hash
      if (path === "/" && location.pathname === "/" && !location.hash && !hash) {
        return "active";
      }
      
      // Apply 'active' to the "Hourly" link only when hash matches `#hourly`
      if (path === "/" && location.hash === hash) {
        return "active";
      }
      return "";
    };

    return (
        <nav className="navbarContainer">
          <ul className="navbar">
            <li className="logo"><img src={logo} alt="Logo"/></li>
            <li className={getLinkClass("/")}><Link to="/" >Now</Link></li>
            <li className={getLinkClass("/", "#hourly")}><Link to="/#hourly">Hourly</Link></li>
            <li className={location.pathname === "/weatherForecast" ? "active" : ""}><Link to="/weatherForecast">Forecast</Link></li>
            <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
          </ul>
          <ScaleButton />
        </nav>
    )
}

export default memo(Navbar);