import { ReactNode, memo } from "react";
import LoginMain from './components/LoginMain';
import AuthPageFooter from '../components/auth-page-footer/AuthPageFooter';
import './LoginPage.css';
import '../auth-pages.css';
import '../../../light-dark.css'
import { useThemeContext } from "../../../contexts/theme-context";

function LoginPage(): ReactNode {
  const { theme}= useThemeContext();
  return (
    <div className={`auth-page-container ${theme}-background`}>
      <LoginMain />
      <AuthPageFooter />
    </div>
  );
}

export default memo(LoginPage);