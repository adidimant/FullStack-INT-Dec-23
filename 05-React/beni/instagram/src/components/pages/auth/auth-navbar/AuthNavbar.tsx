import { memo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import IGLogo from "../../../../assets/ig-text-logo.png";
import "./authNavbar.css";

function AuthNavbar() {
  const authThemeBtnRef = useRef<HTMLButtonElement | null>(null);
  const btnCircleRef = useRef<HTMLElement | null>(null);

  const toggleTheme = useCallback(() => {
    if (btnCircleRef.current && authThemeBtnRef.current) {
      authThemeBtnRef.current.classList.toggle("active");
      btnCircleRef.current.classList.toggle("active");
    }
  }, []);
  return (
    <>
      <nav id="auth-nav">
        <div className="auth-nav-logo-container">
          <Link to="/">
            <img className="auth-nav-logo-img" src={IGLogo} alt="Instagram Logo" />
          </Link>
        </div>
        <div className="auth-nav-btns-container">
          <Link to="/login">
            <button className="auth-nav-login-btn">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="auth-nav-signup-btn">Sign up</button>
          </Link>
          <button className="auth-theme-btn" onClick={toggleTheme} ref={authThemeBtnRef}>
            <div className="auth-theme-btn-circle-container">
              <span className="auth-theme-btn-circle" ref={btnCircleRef}></span>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}

export default memo(AuthNavbar);
