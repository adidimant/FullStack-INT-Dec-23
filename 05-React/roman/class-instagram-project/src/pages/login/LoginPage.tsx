import { ReactNode, memo } from "react";
import './LoginPage.css';
import LoginNavbar from "./LoginNavbar";
import Carousel from './Carousel';
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";

function LoginPage(): ReactNode {
  return (
    <div className="login-page-container">
     <LoginNavbar />
      <div className="login-page-content">
     
      <Carousel />
      <LoginForm />

      </div>
      <LoginFooter />
    </div>
  );
}

export default memo(LoginPage);