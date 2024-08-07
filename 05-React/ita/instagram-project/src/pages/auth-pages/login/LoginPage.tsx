import { ReactNode, memo } from "react";
import LoginMain from './components/LoginMain';
import AuthPageFooter from '../components/auth-page-footer/AuthPageFooter';
import './LoginPage.css';
import '../auth-pages.css';
import AuthPageNavbar from "../components/auth-page-navbar/AuthPageNavbar";

function LoginPage(): ReactNode {
  return (
    <div className="auth-page-container">
      <AuthPageNavbar />
      <LoginMain />
      <AuthPageFooter />
    </div>
  );
}

export default memo(LoginPage);