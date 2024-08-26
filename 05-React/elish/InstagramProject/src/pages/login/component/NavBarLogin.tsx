import { memo } from "react";
import InstagramLogo from '../assets/instagram-text-logo.png';
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import "../LoginPage.css";

function LoginNavbar() {
  return (
    <div className="login-page-navbar">
        <div className="left-logo">
          <Link to={'/'}><img src={InstagramLogo} alt="Instagram Logo" /></Link>
        </div>
        <div className="right-actions">
          <Button name="login-btn" text="Log In" onClick={() => {}} />
          <div className="navbar-signup-link"><Link to={'/register'} style={{ textDecoration: 'none'}}>Sign up</Link></div>
        </div>
      </div>
  );
}

export default memo(LoginNavbar);