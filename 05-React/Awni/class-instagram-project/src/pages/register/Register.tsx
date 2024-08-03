import {  memo } from "react";
import RegisterForms from './components/SignUpForms';
import BasicPageFooter from "../BasicPageFooter";
import './Register.css';

function Register() {
    return (
        <div className="login-page-container">
            <RegisterForms />
            <BasicPageFooter />
        </div>
    )
}

export default memo(Register);