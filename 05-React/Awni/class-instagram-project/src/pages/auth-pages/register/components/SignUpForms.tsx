import { memo } from "react";
import { Link } from "react-router-dom";
import Input from '../../../../components/input/Input';
import Button from "../../../../components/button/Button";
import LittleLink from '../../../../components/littleLink/LittleLink';
import InstagramTextLogo from '../../../../assets/instagram-text-logo.png';
import WhiteFacebookLogo from "../../../../assets/WhiteFacebookLogo.png";
import GooglePlay from '../../../../assets/google-play.png';
import Microsoft from '../../../../assets/microsoft.png';
import "../Register.css";

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

function RegisterForms() {
    return (
       <div className="main">
        <div className="register-container">
         <form className="login-form register-form">
           <div className="instagram-text-logo-container">
             <img src={InstagramTextLogo} alt="instagram text logo" />
           </div>
           <div className="short-explanation-container">
            <span>Sign up to see photos and videos from your friends.</span>
           </div>
           <Button name="facebook-btn"
            text="Log in with Facebook" 
            onClick={() => {}} 
            img={WhiteFacebookLogo} 
            altImg="facebook logo" 
            className="general-btn-height"/>
            <div className="flex-item-wrapper">
              <div className="or-text">OR</div>
           </div>
           <div className="text-inputs-container">
              <Input name="emailOrPhone" text="Mobile number or email address" htmlFor="emailOrPhone" type="text" id="emailOrPhone" validate={validateEmail} />
              <Input name="Full Name" text="Full Name" htmlFor="Full Name" type="text" id="fullName" validate={validateFullName}/>
              <Input name="Username" text="Username" htmlFor="Username" type="text" id="username" validate={validateUsername}/>
              <Input name="Password" text="Password" htmlFor="Password" type="Password" id="password" validate={validatePassword}/>
           </div>
           <p className="Links-to-information">
            <span>People who use our service may have uploaded your contact information to Instagram. 
              <LittleLink text="learn more" to={""} />.</span>
              <br />
              <br />
            <span>By signing up, you agree to our 
            <LittleLink text="Terms" to={""} />, 
            <LittleLink text="Privacy Policy" to={""} /> and   
            <LittleLink text="Cookies Policy" to={""} />.</span>
           </p>
          <Button 
            name="Sign Up"
            text="Sign Up" 
            onClick={() => {}}
            className="bth-signup"/>
         </form>
         <div className="sign-up-section">
            <div className="create-account-text">
            Have an account? <span className="navbar-signup-link"><Link to={'/login'} style={{ textDecoration: 'none'}}>Log in</Link></span>
            </div>
         </div>
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
        
         </div>

       </div> 
    )
}

export default memo(RegisterForms)