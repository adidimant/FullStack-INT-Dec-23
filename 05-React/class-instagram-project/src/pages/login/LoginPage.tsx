import { ReactNode, memo } from "react";
import LoginMain from "./components/LoginMain";
import BasicPageFooter from "../BasicPageFooter";
import LoginNavbar from "./components/LoginNavbar";
import './LoginPage.css';

function LoginPage(): ReactNode {
  return (
    <div className="login-page-container">
      <LoginNavbar />
      <LoginMain />
      <BasicPageFooter />
    </div>
  );
}

export default memo(LoginPage);