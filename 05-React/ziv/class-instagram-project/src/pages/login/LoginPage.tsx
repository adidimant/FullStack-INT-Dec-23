import { ReactNode, memo } from "react";
import LoginMain from "./components/LoginMain";
import LoginFooter from "./components/LoginFooter";
import LoginNavbar from "./components/LoginNavbar";
import './LoginPage.css';

function LoginPage(): ReactNode {
  return (
    <div className="login-page-container">
      <LoginNavbar />
      <LoginMain />
      <LoginFooter />
    </div>
  );
}

export default memo(LoginPage);