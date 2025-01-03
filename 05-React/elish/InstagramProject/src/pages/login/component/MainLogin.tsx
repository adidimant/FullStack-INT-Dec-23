import { memo, ReactNode, useState, useEffect} from 'react';
import FacebookLogo from "../assets/Facebook-logo.png";
import Screenshot1 from "../assets/screenshot1.png";
import Screenshot2 from "../assets/screenshot2.png";
import Screenshot3 from "../assets/screenshot3.png";
import Screenshot4 from "../assets/screenshot4.png";
import HomePhones from "../assets/home-phones.png";
import InstagramTextLogo from "../assets/instagram-text-logo.png";
import GooglePlay from "../assets/google-play.png";
import Microsoft from "../assets/microsoft.png";
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import Input from '../../../components/input/Input';
import '../LoginPage.css';

function LoginMain(): ReactNode {
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
                  <Input type="text" id="username" name="username" text="Phone number, username or email" htmlFor="username" />
                  <Input type="password" id="pwd" name="pwd" text="Password" htmlFor="pwd" />
                </div>
                <div className="flex-item-wrapper">
                  <Button name='btn' text='Log in' onClick={() => {}}/>
                </div>
                <div className="flex-item-wrapper">
                  <div className="or-text">OR</div>
                </div>
                <div className="login-with-fb">
                  <img src={FacebookLogo} alt="facebook logo" />
                  Log in with Facebook
                </div>
                <div className="forgot-password"><Link to={'/ForgotPassword'}>Forgot password?</Link></div>
              </form>
              <div className="sign-up-section">
                <div className="create-account-text">
                  Don't have an account? <span className="sign-up-text"><Link to={'/Register'}>Sign up</Link></span>
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