import { ReactNode, memo } from "react";
import RegisterMain from "./components/RegisterMain";
import RegisterFooter from "./components/RegisterFooter";
import RegisterNavbar from "./components/RegisterNavbar";
import '../login/LoginPage.css';
import './RegisterPage.css';

function RegisterPage(): ReactNode {
  return (
    <div className="login-page-container">
      <RegisterNavbar />
      <RegisterMain />
      <RegisterFooter />
    </div>
  );
}

export default memo(RegisterPage);