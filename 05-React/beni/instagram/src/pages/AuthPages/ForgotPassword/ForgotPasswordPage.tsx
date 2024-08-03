import { memo } from "react";
import AuthNavbar from "../components/AuthNavbar";
import AuthFooter from "../components/AuthFooter";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import "./ForgotPasswordPage.css";

function ForgotPasswordPage() {
  return (
    <div className="forgot-pwd-page-container">
      <AuthNavbar />
      <main className="forgot-pwd-page-main">
        <ForgotPasswordForm />
      </main>
      <AuthFooter />
    </div>
  );
}

export default memo(ForgotPasswordPage);
