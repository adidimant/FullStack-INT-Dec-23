import {  memo, useMemo } from "react";
import RegisterForms from './components/SignUpForms';
import BasicPageFooter from "../components/auth-page-footer/AuthPageFooter";
import './Register.css';
import '../auth-pages.css';
import '../../../contexts/theme-style.css'
import { useThemeContext } from "../../../contexts/theme-context";

function Register() {
    const { theme } = useThemeContext();
    const isDark = useMemo(() => theme === 'dark', [theme]);
    
    return (
        <div className={isDark ? 'auth-page-container dark' : 'auth-page-container light'} >
            <RegisterForms />
            <BasicPageFooter />
        </div>
    )
}

export default memo(Register);