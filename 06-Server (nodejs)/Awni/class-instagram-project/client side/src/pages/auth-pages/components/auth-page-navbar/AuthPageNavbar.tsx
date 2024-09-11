import { memo } from "react";
import InstagramLogo from '../../../../assets/instagram-text-logo.png';
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import './AuthPageNavbar.css';

function AuthPageNavbar() {
  return (
    <div className="auth-page-navbar">
        <div className="left-logo">
          <Link to={'/'}><img src={InstagramLogo} id="header-img" alt="Instagram Logo" /></Link>
        </div>
        <div className="right-actions">
          <Link className="button-link" to={'/'} ><Button name="auth-btn" text="Log In" onClick={() => {}} /> </Link>
          <div className="navbar-signup-link"><Link to={'/register'}>Signup</Link></div>
        </div>
      </div>
  );
}

export default memo(AuthPageNavbar);