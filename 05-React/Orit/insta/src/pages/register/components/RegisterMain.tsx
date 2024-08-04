import { memo, useState, ChangeEvent } from "react";
import InstagramTextLogo from "../../login/assets/instagram-text-logo.png";
import GooglePlay from "../../login/assets/google-play.png";
import Microsoft from "../../login/assets/microsoft.png";
import FacebookLogo from "../../login/assets/Facebook-logo.png";
import Button from "../../../components/button/Button";
import FacebookWhiteLogo from "../assets/facebook-white-logo.png";

function RegisterMain() {
  {const [usernameValue, setUsernameValue] = useState<string>("");
  const [pwdValue, setPwdValue] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(event.target.value);
  };
  const handlePwdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPwdValue(event.target.value);
  };

  const [isActive, setIsActive] = useState<boolean>(true);}

  return (
    <>
      <main className="main">
        <div className="container">
            <form className="register-form login-form">
              <div className="instagram-text-logo-container">
                <img src={InstagramTextLogo} alt="instagram text logo" />
              </div>
              <div className="signup-text">
              Sign up to see photos and videos from your friends.
              </div>
              <div className="login-with-facebook">
                <Button name="login-with" text="Log in with FaceBook" onClick={() => {}} icon={FacebookWhiteLogo}/>
              </div>
              <div className="text-inputs-container">
                {/*<div className="input-wrapper">
                  <label htmlFor="username" className={usernameValue ? "active" : ""}>
                    Phone number, username or email
                  </label>
                  <input type="text" id="username" onChange={handleUsernameChange} />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="pwd" className={pwdValue ? "active" : ""}>
                    Password
                  </label>
                  <input type="password" id="pwd" onChange={handlePwdChange} />
  </div>*/}
              </div>
              <div className="or-divider-container">
                <div className="divider"></div>
                <div className="or-divider">or</div>
                <div className="divider"></div>
              </div>
              <div className="flex-item-wrapper">
                <div className="or-text">OR</div>
              </div>
              <div className="login-with-fb">
                <img src={FacebookLogo} alt="facebook logo" />
                Log in with Facebook
              </div>
              <div className="forgot-password">Forgot password?</div>
            </form>
            <div className="sign-up-section">
              <div className="create-account-text">
                Don't have an account? <span className="sign-up-text">Sign up</span>
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
      </main>
    </>
  );
}

export default memo(RegisterMain);
