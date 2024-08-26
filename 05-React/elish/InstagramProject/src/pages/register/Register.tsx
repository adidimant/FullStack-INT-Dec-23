import { memo, ReactNode } from "react";
import imstagramLogo from "../login/assets/instagram-text-logo.png"
import Button from "../../components/button/Button";
import GooglePlay from "../login/assets/google-play.png"
import Microsoft from "../login/assets/microsoft.png"
import FooterLogin from "../login/component/FooterLogin";
import { Link } from "react-router-dom";
import facebookImg from './assets/WhiteFacebookLogo.png'
import Input from "../../components/input/Input";
import "./Register.css";

const validateUsername = (value: unknown): boolean => {
    if (typeof value == 'string' && value.length >= 4) {
      return true;
    }
    return false;
};
  
function validatePassword(value: unknown): boolean {
    if (typeof value == 'string') {
      return /[A-Z]/.test(value) &&
      /[a-z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[^A-Za-z0-9]/.test(value) &&
      value.length > 4;
    }
    return false;
}

const validateEmail = (value: unknown): boolean => {
    if (typeof value == 'string') {
      const isMatch = value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return !!isMatch;
    }
    return false;
};
  
const validateFullName = (value: unknown): boolean => {
    if (typeof value == 'string' && value.includes(' ') && value.length >=5) {
      return true;
    }
    return false;
};

function Register(): ReactNode {
    return (
        <div className="register-container">
            <form className="register-form">
                <div className="register-logo-text">
                    <img src={imstagramLogo} alt="instagram logo" />
                </div>
                <div className="register-text">
                    Sign up to see photos and videos
                    from your friends.
                </div>
                <div className="register-btn-facebook">
                    <Button name="btn-facebook" text="Log in with Facebook" onClick={() => {}} img={facebookImg}/>
                </div>
                <div className="flex-item-wrapper">
                    <div className="or-text">OR</div>
                </div>
                <div className="register-text-inputs">
                    <Input name="emailOrPhone" text="Mobile number or email address" htmlFor="emailOrPhone" type="text" id="emailOrPhone" validate={validateEmail} />
                    <Input name="Full Name" text="Full Name" htmlFor="Full Name" type="text" id="fullName" validate={validateFullName}/>
                    <Input name="Username" text="Username" htmlFor="Username" type="text" id="username" validate={validateUsername}/>
                    <Input name="Password" text="Password" htmlFor="Password" type="Password" id="password" validate={validatePassword}/>
                </div>
                <div className="register-text-p">
                    <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                    <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                </div>
                <div className="btn-signUp">
                    <Button name="btn-signUp" text="Sign up" onClick={() => {}}/>
                </div>
            </form>
            <p className="register-form-buttom">
                Have an account? <Link to={'/'}>Log in</Link>
            </p>
            <div className="get-app-section">
                <div className="get-app-text">Get the app.</div>
                <div className="get-app-img-container">
                    <div className="google-play">
                        <img src={GooglePlay} alt="google play" />
                    </div>
                    <div className="microsoft">
                        <img src={Microsoft} alt="microsoft" />
                    </div>
                </div>
            </div>
            <FooterLogin/>
        </div>
    )
}

export default memo(Register);