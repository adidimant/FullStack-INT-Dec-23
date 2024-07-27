import { memo } from "react";
import InstagramTextLogo from "../assets/instagram-text-logo.png";

function LoginNavbar() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <img src={InstagramTextLogo} alt="Instagram text logo" />
          </div>
          <div className="navbar-right">
            <div className="btn-container">
              <button className="login-btn">Log In</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(LoginNavbar);
