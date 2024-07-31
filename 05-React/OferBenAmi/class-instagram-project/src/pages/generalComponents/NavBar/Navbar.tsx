import { memo } from "react";
import InstagramLogo from '../../login/assets/instagram-text-logo.png';
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";

function Navbar() {
  console.log('navbar')
  return (
    <div className="login-page-navbar">
        <div className="left-logo">
          <Link to={'/'}><img src={InstagramLogo} alt="Instagram Logo" /></Link>
        </div>
        <div className="right-actions">
          <Link to='/'><Button name="login-btn" text="Log In" onClick={() => {}} /></Link>
          <div className="navbar-signup-link"><Link to={'/signup'} style={{ textDecoration: 'none'}}>Signup</Link></div>
        </div>
      </div>
  );
}

export default memo(Navbar);
