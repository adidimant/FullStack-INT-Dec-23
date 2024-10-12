import { MouseEvent } from "react";
import FormInput from "../../../../../form-input/FormInput";
import FormSeperator from "../../../../../form-seperator/FormSeperator";
import IGLogo from "../../../../../../assets/ig-text-logo.png";
import fbLogo from "../../../../../../assets/fb-logo.png";
import "./logInForm.css";
import { Link } from "react-router-dom";

export default function LogInForm() {
  const handleLoginSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="login-form">
        <div className="form-logo-container">
          <img className="form-logo-img" src={IGLogo} alt="Instagram text logo" />
        </div>

        <div className="form-inputs-container">
          <FormInput
            id="username"
            labelText="Phone number, username or email"
            inputType="text"
            style={{ marginBottom: "6px" }}
          />
          <FormInput id="pwd" labelText="Password" inputType="password" />
        </div>

        <button className="submit-login-btn" onClick={handleLoginSubmit}>
          Log in
        </button>

        <FormSeperator />

        <a href="#" className="login-form-fb">
          <img src={fbLogo} alt="Facebook Logo" className="login-form-fb-logo" />
          Log in with Facebook
        </a>

        <Link to="/forgot-pwd" className="login-form-forgot-pwd">
          Forgot password?
        </Link>
      </form>
    </>
  );
}
