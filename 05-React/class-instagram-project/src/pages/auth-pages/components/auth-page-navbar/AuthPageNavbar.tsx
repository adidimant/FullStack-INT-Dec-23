import { memo, useCallback, useMemo, useRef } from "react";
import InstagramLogo from '../../../../assets/instagram-text-logo.png';
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import './AuthPageNavbar.css';
import { useThemeContext } from "../../../../contexts/theme-context";

function AuthPageNavbar() {
  const { theme, dispatch: themeDispatch } = useThemeContext(); // renaming the `dispath` variable name to `themeDispatch`
  const isDark = useMemo(() => theme == 'dark', [theme]);

  const changeTheme = useCallback(() => {
    if (themeDispatch) {
      themeDispatch(isDark ? 'light' : 'dark');
    }
  }, [isDark, themeDispatch]);

  return (
    <div className="auth-page-navbar">
        <div className="left-logo">
          <Link to={'/'}><img src={InstagramLogo} alt="Instagram Logo" /></Link>
        </div>
        <div className="right-actions">
          <Link className="button-link" to={'/'} ><Button name="auth-btn" text="Log In" onClick={() => {}} /> </Link>
          <div className="navbar-signup-link"><Link to={'/register'}>Signup</Link></div>
        </div>
        <div>
          <button style={{ backgroundColor: isDark ? 'white' : 'black', color: isDark ? 'black' : 'white' }} onClick={changeTheme}>Dark / Light mode</button>
        </div>
      </div>
  );
}

export default memo(AuthPageNavbar);