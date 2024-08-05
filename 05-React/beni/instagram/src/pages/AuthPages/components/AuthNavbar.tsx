import { memo } from "react";
import InstagramLogo from "../../../assets/instagram-text-logo.png";
import { Link } from "react-router-dom";
import "./AuthNavbar.css";
import "../../../components/button/Button.css";

function AuthNavbar() {
  return (
    <nav className="auth-navbar">
      <div className="navbar-wrapper">
        <div className="left-logo">
          <Link to={"/"}>
            <img src={InstagramLogo} alt="Instagram Logo" />
          </Link>
        </div>
        <div className="right-actions">
          <div className="navbar-login-container general-btn">
            <Link to="/" className="navbar-login-link">
              Log In
            </Link>
          </div>
          <div className="navbar-signup-container">
            <Link to={"/register"} className="navbar-signup-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(AuthNavbar);
