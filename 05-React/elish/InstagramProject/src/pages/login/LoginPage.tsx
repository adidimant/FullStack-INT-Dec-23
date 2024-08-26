import { ReactNode, memo } from "react";
import LoginMain from "./component/MainLogin";
import LoginFooter from "./component/FooterLogin";
import './LoginPage.css';

function LoginPage(): ReactNode {
  return (
    <div className="login-page-container">
      <LoginMain />
      <LoginFooter />
    </div>
  );
}

export default memo(LoginPage);