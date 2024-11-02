import { memo, useCallback, useMemo, useRef } from "react";
import InstagramLogo from '../../../../assets/instagram-text-logo.png';
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import './AuthPageNavbar.css';
import '../../../../light-dark.css'
import { useThemeContext } from "../../../../contexts/theme-context";

function AuthPageNavbar() {
  const { theme } = useThemeContext(); // renaming the `dispatch` variable name to `themeDispatch`
  const isDark = useMemo(() => theme == 'dark', [theme]);

  return (
    <div className={`auth-page-navbar ${isDark ? 'dark-background dark-unborder' : 'light-background'}`}>
        <div className="left-logo">
          <Link to={'/'}><img className={`${theme}-logo`} src={InstagramLogo} alt="Instagram Logo" /></Link>
        </div>
        <div className="right-actions">
          <Link className="button-link" to={'/'} ><Button name="auth-btn" text="Log In" onClick={() => {}} /> </Link>
          <div className="navbar-signup-link"><Link to={'/register'}>Signup</Link></div>
        </div>
      </div>
  );
}

export default memo(AuthPageNavbar);