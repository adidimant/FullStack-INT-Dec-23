import {  memo } from "react";
import RegisterForms from './components/SignUpForms';
import BasicPageFooter from "../components/auth-page-footer/AuthPageFooter";
import './Register.css';
import '../auth-pages.css';

function Register() {
    return (
        <div className="auth-page-container">
            <RegisterForms />
            <BasicPageFooter />
        </div>
    )
}

export default memo(Register);