import { ReactNode, memo } from "react";
import AuthFooter from "../components/AuthFooter";
import AuthNavbar from "../components/AuthNavbar";
import LoginForm from "./components/LoginForm";
import ScreenshotCarousel from "./components/ScreenshotCarousel";
import "./LoginPage.css";

function LoginPage(): ReactNode {
  return (
    <div className="login-page-container">
      <AuthNavbar />
      <main className="login-page-main">
        <div className="left-container">
          <ScreenshotCarousel />
        </div>
        <div className="right-container">
          <LoginForm />
        </div>
      </main>
      <AuthFooter />
    </div>
  );
}

export default memo(LoginPage);
