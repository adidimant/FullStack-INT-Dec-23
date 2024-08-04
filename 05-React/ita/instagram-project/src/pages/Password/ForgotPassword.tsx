import { memo } from "react";
import BasicPageFooter from "../BasicPageFooter";
import LoginNavbar from "../login/components/LoginNavbar";
import Password from "./Password";

function ForgotPassword() {
    return (
        <div className="ForgotPassword-container">
        <LoginNavbar />
        <Password />
        <BasicPageFooter />
        </div>
    )
}

export default memo(ForgotPassword)