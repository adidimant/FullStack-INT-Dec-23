import { memo, useMemo } from "react";
import InstagramLogo from '../../../../assets/instagram-text-logo.png';
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import { useThemeContext } from "../../../../contexts/theme-context";
import './AuthPageNavbar.css';
import '../../../../contexts/theme-style.css'



function AuthPageNavbar() {
  const { theme } = useThemeContext();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
      <div className= {isDark ? 'auth-page-navbar dark' : 'auth-page-navbar light'} >
        <div className={isDark ? 'left-logo dark':'left-logo light'}>
          <Link to={'/'}><img src={InstagramLogo} alt="Instagram Logo" /></Link>
        </div>
        <div className= {isDark ? 'right-actions dark':'right-actions light'}>
          <Link className= {isDark ? 'button-link dark':'button-link light'} to={'/'} ><Button name="auth-btn" text="Log In" onClick={() => {}} /> </Link>
          <div className= {isDark ? 'navbar-signup-link dark':'navbar-signup-link light'}><Link to={'/register'}>Signup</Link></div>
        </div>
      </div>
  );``
}

export default memo(AuthPageNavbar);