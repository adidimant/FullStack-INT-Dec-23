import { memo } from "react";
import lock from "./assets/lock.png"
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import LittleLink from "../../components/littleLink/LittleLink";
import Or from "../../components/Or/Or";
import { Link } from "react-router-dom";
import "./Password.css";

function Password() {
    return (
        <div className="main">
            <div className="password-form">
                <div className="img-lock-container">
                    <img src={lock} alt="lock-img" className="img-lock" />
                </div>
                <div className="title">
                    <span>Trouble with logging in?</span>
                </div>
                <div className="instructions">
                    <span>Enter your email address, phone number or username, and we'll send you a link to get back into your account.</span>
                </div>
                <Input name="username" text="Email address, phone number or username" type="text" id="username" htmlFor="username"/>
                <Button  name="Send" text="Send Login Link" onClick={() => {}} className="bth-sentd"/>
                <LittleLink text="Can't reset your password?" to={""}/>
                <Or />
                <div><Link className="Create-account-link" to="/register">Create New Account</Link></div>
                <div className="link-login-container"><Link to="/login" className="link-login">Back to Login</Link></div>
            </div>
        </div>
    )
}

export default memo(Password)