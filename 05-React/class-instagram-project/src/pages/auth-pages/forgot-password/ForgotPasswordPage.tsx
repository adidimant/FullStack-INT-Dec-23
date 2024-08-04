import { memo } from "react";
import AuthPageFooter from '../components/auth-page-footer/AuthPageFooter';
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import "./ForgotPasswordPage.css";
import '../auth-pages.css';

function ForgotPasswordPage() {
  return (
    <div className="auth-page-container">
      <main className="forgot-pwd-page-main">
        <ForgotPasswordForm />
      </main>
      <AuthPageFooter />
    </div>
  );
}

export default memo(ForgotPasswordPage);
