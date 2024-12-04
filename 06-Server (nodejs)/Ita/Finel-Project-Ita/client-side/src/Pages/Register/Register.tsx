import { memo } from "react";
import "./Register.css";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import ButtonModeTheme from "../ButtonModeTheme/ButtonModeTheme";
import { useThemeContext } from "../../context/theme-context";

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
        <form>
                <Box className="register-box">
                    <div className="title-login-form">הרשמה</div>
                    <div><Input title="אמייל:" type="email" id="email" width="400px"/></div>
                    <div><Input title="שם החברה/עסק:" type="text" id="CompanyName" width="400px"/></div>
                    <div><Input title="מספר חברה/עסק:" type="text" id="CompanyNamber" width="400px"/></div>
                    <div><Input title="שם פרטי" type="text" id="CompanyName" width="400px"/></div>
                    <div><Input title="שם משפחה" type="text" id="CompanyName" width="400px"/></div>
                    <div><Input title="רחוב ומספר בית" type="text" id="street" width="400px"/></div>
                    <div><Input title="עיר" type="text" id="city" width="400px"/></div>
                    <div><Input title="סיסמה" type="password" id="password" width="400px"/></div>
                    <div><Button name="כניסה" text="הצטרפות" onClick={() => {}} className="bthReg"/></div>
                </Box>
            </form>  
        </div>
            
        </>
    )
}

export default memo(Register)