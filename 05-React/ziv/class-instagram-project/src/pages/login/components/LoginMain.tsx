import { memo, useState, useEffect, ChangeEvent } from "react";
import InstagramTextLogo from "../assets/instagram-text-logo.png";
import GooglePlay from "../assets/google-play.png";
import Microsoft from "../assets/microsoft.png";
import FacebookLogo from "../assets/Facebook-logo.png";
import HomePhones from "../assets/home-phones.png";
import Screenshot1 from "../assets/screenshot1.png";
import Screenshot2 from "../assets/screenshot2.png";
import Screenshot3 from "../assets/screenshot3.png";
import Screenshot4 from "../assets/screenshot4.png";

function LoginMain() {
  const [usernameValue, setUsernameValue] = useState<string>("");
  const [pwdValue, setPwdValue] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(event.target.value);
  };
  const handlePwdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPwdValue(event.target.value);
  };

  const [prevScreenshot, setPrevScreenshot] = useState<string>(Screenshot1);
  const [nextScreenshot, setNextScreenshot] = useState<string>(Screenshot2);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    const allScreenShots = [Screenshot1, Screenshot2, Screenshot3, Screenshot4];
    let index = 0;
    const interval = setInterval(() => {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
      if (index > 3) {
        index = 0;
      }
      setPrevScreenshot(allScreenShots[index]);
      if (index >= 3) {
        setNextScreenshot(allScreenShots[0]);
      } else {
        setNextScreenshot(allScreenShots[index + 1]);
      }
      index++;
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="left-container">
            <img src={HomePhones} alt="phones" />
            <div className="gallery-container">
              <img
                src={prevScreenshot}
                alt="screenshot-image"
                className={`screenshot prev ${isActive ? "active" : "disabled"}`}
              />
              <img
                src={nextScreenshot}
                alt="screenshot-image"
                className={`screenshot next ${isActive ? "disabled" : "active"}`}
              />
            </div>
          </div>

          <div className="right-container">
            <form className="login-form">
              <div className="instagram-text-logo-container">
                <img src={InstagramTextLogo} alt="instagram text logo" />
              </div>
              <div className="text-inputs-container">
                <div className="input-wrapper">
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
                </div>
              </div>
              <div className="flex-item-wrapper">
                <input type="submit" value="Log in" />
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
        </div>
      </main>
    </>
  );
}

export default memo(LoginMain);
