import {  memo } from "react";
import RegisterForms from "./components/SignUpForms";
import LoginFooter from "./components/LoginFooter";
import './LoginPage.css';

function Register() {
    return (
        <div className="login-page-container">
            <RegisterForms />
            <LoginFooter />
        </div>
    )
}

export default memo(Register)