import { memo, useState, useEffect, useMemo } from "react";
import Input from "../../../../components/input/Input";
import InstagramTextLogo from "../../../../assets/instagram-text-logo.png";
import GooglePlay from "../../../../assets/google-play.png";
import Microsoft from "../../../../assets/microsoft.png";
import FacebookLogo from "../../../../assets/Facebook-logo.png";
import HomePhones from "../../../../assets/home-phones.png";
import Screenshot1 from "../../../../assets/screenshot1.png";
import Screenshot2 from "../../../../assets/screenshot2.png";
import Screenshot3 from "../../../../assets/screenshot3.png";
import Screenshot4 from "../../../../assets/screenshot4.png";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import LittleLink from "../../../../components/littleLink/LittleLink";
import { useThemeContext } from "../../../../contexts/theme-context";
import '../../../../contexts/theme-style.css'

function LoginMain() {
  // const [usernameValue, setUsernameValue] = useState<string>("");
  // const [pwdValue, setPwdValue] = useState<string>("");

  // const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setUsernameValue(event.target.value);
  // };
  // const handlePwdChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPwdValue(event.target.value);
  // };

  const [prevScreenshot, setPrevScreenshot] = useState<string>(Screenshot1);
  const [nextScreenshot, setNextScreenshot] = useState<string>(Screenshot2);
  const [isActive, setIsActive] = useState<boolean>(true);
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
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
  const customStyle = useMemo(()=>{
    return ({
      backgroundColor: isDark ? '#000000':'#ffffff',
      color: isDark ? '#ffffff':'#385185'
    })
  },[isDark])
  return (
    <>
      <main className={isDark ? 'main dark' : 'main light'}>
        <div className={isDark ? 'container dark' : 'container light'}>
          <div className={isDark ? 'left-container dark' : 'left-container light'}>
            <img src={HomePhones} alt="phones" />
            <div className={isDark ? 'gallery-container dark' : 'gallery-container light'}>
              <img
                src={prevScreenshot}
                alt="screenshot-image"
                className={`screenshot prev ${isActive ? "active" : "disabled"} ${isDark ? ' dark':' light'}`}
              />
              <img
                src={nextScreenshot}
                alt="screenshot-image"
                className={`screenshot next ${isActive ? "disabled" : "active"}${isDark ? ' dark':' light'}`}
              />
            </div>
          </div>

          <div className={isDark ? 'right-container dark' : 'right-container light'}>
            <form className={isDark ? 'login-form dark' : 'login-form light'}>
              <div className={isDark ? 'instagram-text-logo-container dark' : 'instagram-text-logo-container light'}>
                <img src={InstagramTextLogo} alt="instagram text logo" />
              </div>
              <div className={isDark ? 'text-inputs-container dark' : 'text-inputs-container light'}>
              <Input type="text" id="username" name="username" text="Phone number, username or email" htmlFor="username" />
              <Input type="password" id="pwd" name="pwd" text="Password" htmlFor="pwd" />
              </div>
              <div className={isDark ? 'flex-item-wrapper dark' : 'flex-item-wrapper light'}>
                <Button text="Log in" name="login-submit" onClick={() => { /* implement login here */}} />
              </div>
              <div className={isDark ? 'flex-item-wrapper dark' : 'flex-item-wrapper light'}>
                <div className={isDark ? 'or-text dark' : 'or-text light'}>OR</div>
              </div>
              <div className={isDark ? 'login-with-fb dark' : 'login-with-fb light'}>
                <img src={FacebookLogo} alt="facebook logo" />
                <span style={{...customStyle, fontWeight:'bold'}}>Log in with Facebook</span>
              </div>
              <LittleLink to={'/forgot-password'} text="Forgot password?"/>
            </form>
            <div className="sign-up-section">
              <div className={'create-account-text'} style={customStyle}>
              Don't have an account? <Link to="/register"> Sign up</Link>
              </div>
            </div>
            <div className={isDark ? 'get-app-section dark' : 'get-app-section light'}>
              <div className={isDark ? 'get-app-text dark' : 'get-app-text light'}>Get the app.</div>
              <div className={isDark ? 'get-app-img-container dark' : 'get-app-img-container light'}>
                <div className={isDark ? 'google-play dark' : 'google-play light'}>
                  <img src={GooglePlay} alt="google play" />
                </div>
                <div className={isDark ? 'microsoft dark' : 'microsoft light'}>
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
