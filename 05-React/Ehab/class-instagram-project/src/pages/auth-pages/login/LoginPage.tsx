import { ReactNode, memo, useMemo } from "react";
import LoginMain from './components/LoginMain';
import AuthPageFooter from '../components/auth-page-footer/AuthPageFooter';
import { useThemeContext } from "../../../contexts/theme-context";
import './LoginPage.css';
import '../auth-pages.css';
import '../../../contexts/theme-style.css'

function LoginPage(): ReactNode {
  const { theme } = useThemeContext();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <div className= {isDark ? 'auth-page-container dark' : 'auth-page-container light'}>
      <LoginMain />
      <AuthPageFooter />
    </div>
  );
}

export default memo(LoginPage);