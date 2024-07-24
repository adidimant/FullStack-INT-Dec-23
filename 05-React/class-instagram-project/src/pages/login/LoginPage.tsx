import { ReactNode, memo } from "react";
import './LoginPage.css';

function LoginPage(): ReactNode {
  return (
    <div className="login-page-container">
      <div className="login-page-navbar">
        <div className="logo">asd</div>
        <div className="links"><button>Signup</button></div>
      </div>
    </div>
  );
}

export default memo(LoginPage);