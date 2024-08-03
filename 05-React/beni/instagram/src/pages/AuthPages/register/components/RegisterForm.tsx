import { memo } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../../../components/button/Button";
import AuthForm from "../../components/AuthForm";
import UnderForm from "../../components/UnderForm";
import FormSeperator from "../../components/FormSeperator";
import WhiteFacebookLogo from "../../../../assets/WhiteFacebookLogo.png";
import "./RegisterForm.css";

const validateEmail = (value: string): boolean => {
  if (typeof value == "string") {
    const isMatch = value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return !!isMatch;
  }
  return false;
};

const validateUsername = (value: string): boolean => {
  if (typeof value == "string" && value.length >= 5) {
    return true;
  }
  return false;
};

function validatePassword(value: string): boolean {
  if (typeof value == "string") {
    return (
      /[A-Z]/.test(value) &&
      /[a-z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[^A-Za-z0-9]/.test(value) &&
      value.length > 4
    );
  }
  return false;
}

const validateFullName = (value: string): boolean => {
  if (typeof value == "string") {
    return /^[A-Za-z]{2,}(?:\s[A-Za-z]{2,}){1,}$/.test(value);
  }
  return false;
};

function RegisterForms() {
  return (
    <>
      <AuthForm className="register-form" height="621px">
        <div className="description">Sign up to see photos and videos from your friends.</div>
        <Button
          name="login-with-fb"
          className="login-with-fb-btn"
          img={WhiteFacebookLogo}
          altImg="facebook logo"
          text="Log in with Facebook"
          onClick={() => {}}
        />
        <FormSeperator />
        <div className="inputs-container">
          <FormInput
            type="text"
            name="emailOrPhone"
            htmlFor="emailOrPhone"
            id="emailOrPhone"
            text="Mobile number or Email"
            validate={validateEmail}
          />
          <FormInput
            type="text"
            name="fname"
            htmlFor="fname"
            id="fname"
            text="Full Name"
            validate={validateFullName}
          />
          <FormInput
            type="text"
            name="username"
            htmlFor="username"
            id="username"
            text="Username"
            validate={validateUsername}
          />
          <FormInput
            type="Password"
            name="pwd"
            htmlFor="password"
            id="password"
            text="Password"
            validate={validatePassword}
          />
        </div>
        <div className="notice-container">
          <span className="contact-info-notice">
            People who use our service may have uploaded your contact information to Instagram.{" "}
            <Link to="/register" className="learn-more-link">
              Learn More
            </Link>
            <br />
            <br />
          </span>
          <span className="terms-notice">
            By signing up, you agree to our{" "}
            <Link to="/register" className="terms-link">
              Terms
            </Link>
            ,{" "}
            <Link to="/register" className="privacy-policy-link">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/register" className="cookies-policy-link">
              Cookies Policy
            </Link>
            .
          </span>
        </div>
        <Button
          name="submit-signup"
          className="submit-signup-btn"
          width="100%"
          text="Sign Up"
          onClick={() => {}}
        />
      </AuthForm>
      <UnderForm text="Have an account?" linkText="Log In" linkPath="/" />
    </>
  );
}

export default memo(RegisterForms);
