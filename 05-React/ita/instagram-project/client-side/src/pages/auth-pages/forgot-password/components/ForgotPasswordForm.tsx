import { memo } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/auth-form/AuthForm";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../../../components/button/Button";
import FormSeperator from "../../components/form-separator/FormSeperator";
import "./ForgotPasswordForm.css";

function ForgtoPasswordForm() {
  return (
    <AuthForm className="forgot-pwd-form" height="535px">
      <div className="header">Trouble loggin in?</div>
      <div className="description">
        Enter your email, phone, or username and we'll send you a link to get back into your
        account.
      </div>
      <FormInput
        type="text"
        name="emailOrPhoneOrUsername"
        htmlFor="emailOrPhoneOrUsername"
        id="emailOrPhoneOrUsername"
        text="Email, Phone, or Username"
      />
      <Button
        name="submit-login-link"
        className="submit-login-link-btn"
        width="100%"
        text="Send login link"
        onClick={() => {}}
      />
      <Link to="/forgot-pwd" className="cant-reset-pwd-link">
        Can't reset your password?
      </Link>
      <FormSeperator />
      <Link to="/register" className="create-new-account-link">
        Create new account
      </Link>
      <Link to="/" className="back-to-login-link">
        Back to login
      </Link>
    </AuthForm>
  );
}

export default memo(ForgtoPasswordForm);
