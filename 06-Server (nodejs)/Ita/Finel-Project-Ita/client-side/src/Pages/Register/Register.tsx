import { memo } from "react";
import "./Register.css";
import Button from "../../components/Button/Button";
import ButtonModeTheme from "../ButtonModeTheme/ButtonModeTheme";
import { useThemeContext } from "../../context/theme-context";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

function Register() {
    const { theme } = useThemeContext();

    return (
        <>
        <div className={`nav-bar-register ${theme}-nb-reg`}>
            {/* צד ימין */}
            <div className="logo-text">חשבונית ירוקה-לוגו</div>

            {/* צד שמאל */}
            <div className="left-nb-reg">
                <ButtonModeTheme />
                <Button name="כניסה" text="כניסה" onClick={() => {}} className="bthLogin"/>
            </div>
        </div>
        <div className="main-reg">
            <RegistrationForm/>
        </div>
            
        </>
    )
}

export default memo(Register)