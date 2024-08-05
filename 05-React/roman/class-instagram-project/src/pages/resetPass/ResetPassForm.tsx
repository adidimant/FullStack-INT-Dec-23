import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

function ResetPassForm() {

    return (
        <div className="reset-pass-form">
            <div className="form-content">
                <span className="form-content-img"></span>
                <div className="form-content-title">Trouble logging in?</div>
                <label htmlFor="emailUsername">Enter your email, phone, or username and we'll send you a link to get back into your account.</label>
                <input type="text" name="emailUsername" placeholder="Email, Phone, or Username" />
                <Button name="resetPassBtn" text="Send login link" />
                <Link className='recovery-btn' to="">Cant reset your password?</Link>
                <div className="separator-container">
                    <div className="separator-line"></div>
                    <span className="separator-text">OR</span>
                    <div className="separator-line"></div>
                </div>

                <Link className="register-btn" to="/Register">Create new account</Link>
                <div className="form-content-back">
                    <Link to="/">Back to login</Link>
                </div>
            </div>

        </div>
    )

}
export default ResetPassForm;