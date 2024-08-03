import { memo } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../../../components/button/Button";
import AuthForm from "../../components/AuthForm";
import UnderForm from "../../components/UnderForm";
import FacebookLogo from "../../../../assets/Facebook-logo.png";
import "./LoginForm.css";
import FormSeperator from "../../components/FormSeperator";

function LoginMain() {
  return (
    <>
      <AuthForm className="login-form" height="408px">
        <div className="inputs-container">
          <FormInput
            type="text"
            id="username"
            name="username"
            text="Phone number, username or email"
            htmlFor="username"
          />
          <FormInput type="password" id="pwd" name="pwd" text="Password" htmlFor="pwd" />
        </div>
        <Button
          name="submit-login"
          className="submit-login-btn"
          width="100%"
          text="Log in"
          onClick={() => {
            /* implement login here */
          }}
        />
        <FormSeperator />
        <Link to="/" className="fb-login-link">
          <img src={FacebookLogo} alt="facebook logo" />
          <span className="fb-login-text">Log in with Facebook</span>
        </Link>
        <Link to="/forgot-pwd" className="forgot-password">
          Forgot password?
        </Link>
      </AuthForm>

      <UnderForm text="Don't have an account?" linkText="Sign Up" linkPath="/register" />
    </>
  );
}

export default memo(LoginMain);
