import { memo } from "react";
import BasicPageFooter from "../BasicPageFooter"; 
import { Link } from "react-router-dom";
import InstagramLogo from '../../assets/instagram-text-logo.png';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import './Reset.css'


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

function Reset(){
    return(
        <>
            <div className="left-logo">
                <Link to={'/'}><img src={InstagramLogo} alt="Instagram Logo" /></Link>
            </div>
            <div className="main">
                <div className="reset-form">
                    <div className="lockLogo">
                        <span></span>
                    </div>
                    <div className="Troubleloggingin"><span>Trouble logging in?</span></div>
                    <div className="input-lable"><span>Enter your email, phone, or username and we'll send you a link to get back into your account.</span></div>
                    <div className="input-field"><Input name="emailOrPhoneOrUsername" text="Email, Phone, or Username" htmlFor="" type="text" id="emailOrPhoneOrUsername" validate={validateEmail} /></div>
                    <div className="btn-send-container"><Button name="Login" text="Send login link" onClick={() => {}} className="btn-send" /></div>
                    <div className="cannotLogIn"><a href="https://help.instagram.com/374546259294234" >Can't reset your password?</a></div>
                    <div className="orContainer">
                        <div className="orLeft"></div>
                        <div className="or">OR</div>
                        <div className="orRight"></div>
                    </div>
                    <div className="new-account"><Link to='/register' >Create new account</Link></div>
                    <div className="login-page-link">
                        <div><Link to='/register' >Back to login</Link></div>
                    </div>
                </div>
                <BasicPageFooter />
            </div>
        </>
    );
}

export default memo (Reset);