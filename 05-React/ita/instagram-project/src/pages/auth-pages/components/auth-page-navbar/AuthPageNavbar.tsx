import { memo, useCallback, useMemo, useRef } from "react";
import InstagramLogo from '../../../../assets/instagram-text-logo.png';
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import './AuthPageNavbar.css';
import '../../../../light-dark.css'
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
    <div className={`auth-page-navbar ${isDark ? 'dark-background dark-unborder' : 'light-background'}`}>
        <div className="left-logo">
          <Link to={'/'}><img className={`${theme}-logo`} src={InstagramLogo} alt="Instagram Logo" /></Link>
        </div>
        <div className="right-actions">
          <Link className="button-link" to={'/'} ><Button name="auth-btn" text="Log In" onClick={() => {}} /> </Link>
          <div className="navbar-signup-link"><Link to={'/register'}>Signup</Link></div>
        </div>
        <div>
          <button className={isDark ? 'dark-bth' : 'light-bth'} onClick={changeTheme}>
            <span className="material-symbols-outlined">
            {isDark ? 'wb_sunny' : 'dark_mode'}
            </span></button>
        </div>
      </div>
  );
}

export default memo(AuthPageNavbar);