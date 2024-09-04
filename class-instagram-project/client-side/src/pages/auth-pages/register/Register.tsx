import {  memo } from "react";
import RegisterForms from './components/SignUpForms';
import BasicPageFooter from "../components/auth-page-footer/AuthPageFooter";
import './Register.css';
import '../auth-pages.css';
import '../../../light-dark.css'
import { useThemeContext } from "../../../contexts/theme-context";

function Register() {
    const { theme}= useThemeContext()
    return (
        <div className={`auth-page-container ${theme}-background`}>
            <RegisterForms />
            <BasicPageFooter />
        </div>
    )
}

export default memo(Register);