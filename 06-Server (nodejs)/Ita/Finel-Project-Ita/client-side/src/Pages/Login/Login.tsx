import { memo } from "react";
import "./Login.css";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <>
        <div className="login-page-container">
            <div className="right">
                <form>
                    <Box className="login-box">
                        <div className="title-login-form">שלום לך! שנתחבר?</div>
                        <div><Input type="email" id="email" placeholder="הקלידו את כתובת האימייל" width="400px"/></div>
                        <div><Input type="password" id="password" placeholder="סיסמה" width="400px"/></div>
                        <div><Link to={'/ForgotPasswordPage'} className="forget-password">הסיסמה נשכחה?</Link></div>
                        <div><Button name="כניסה" text="כניסה" onClick={() => {}} className="bthLogin"/></div>
                        <div className="register-text-link">עדין לא הצטרפת?<Link to={"/register"} className="forget-password">להצטרפות</Link></div>
                    </Box>
                </form>  
            </div>
            <div className="left">
                <div>חשבונית בקליק</div>
            </div>

        </div>
        </>
    )
}

export default memo(LoginPage)