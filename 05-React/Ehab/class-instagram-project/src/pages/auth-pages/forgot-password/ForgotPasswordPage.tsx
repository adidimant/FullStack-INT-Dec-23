import { memo, useMemo } from "react";
import AuthPageFooter from '../components/auth-page-footer/AuthPageFooter';
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { useThemeContext } from "../../../contexts/theme-context";
import "./ForgotPasswordPage.css";
import '../auth-pages.css';
import '../../../contexts/theme-style.css'


function ForgotPasswordPage() {
  const { theme } = useThemeContext();
  const isDark = useMemo(() => theme === 'dark', [theme]);
  
  return (
    <div className= {isDark ? 'auth-page-container dark' : 'auth-page-container light'}>
      <main className= {isDark ? 'forgot-pwd-page-main dark' : 'forgot-pwd-page-main light'}>
        <ForgotPasswordForm />
      </main>
      <AuthPageFooter />
    </div>
  );
}

export default memo(ForgotPasswordPage);
