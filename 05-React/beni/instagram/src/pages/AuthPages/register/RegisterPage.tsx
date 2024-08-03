import { memo } from "react";
import AuthFooter from "../components/AuthFooter";
import AuthNavbar from "../components/AuthNavbar";
import RegisterForm from "./components/RegisterForm";
import "./RegisterPage.css";

function Register() {
  return (
    <div className="register-page-container">
      <AuthNavbar />
      <main className="register-page-main">
        <RegisterForm />
      </main>
      <AuthFooter />
    </div>
  );
}

export default memo(Register);
