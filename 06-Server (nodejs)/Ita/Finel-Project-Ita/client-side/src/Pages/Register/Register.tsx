import { memo, useCallback } from "react";
import Button from "../../components/Button/Button";
import ButtonModeTheme from "../ButtonModeTheme/ButtonModeTheme";
import { useThemeContext } from "../../context/theme-context";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const { theme } = useThemeContext();
    const navigate = useNavigate();
    
    const clickLogin = useCallback(() => {
        navigate('/login'); 
    }, [navigate])

    return (
        <>
        <div className={`nav-bar-register ${theme}-nb-reg`}>
            {/* צד ימין */}
            <div><img src={logo} style={{height: '60px'}}></img></div>

            {/* צד שמאל */}
            <div className="left-nb-reg">
                <ButtonModeTheme />
                <Button name="כניסה" text="כניסה" onClick={clickLogin} className="bthLogin"/>
            </div>
        </div>
        <div className="main-reg">
            <RegistrationForm/>
        </div>
            
        </>
    )
}

export default memo(Register)