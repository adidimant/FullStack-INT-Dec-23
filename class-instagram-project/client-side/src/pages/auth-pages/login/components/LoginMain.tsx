import { memo, useState, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import LittleLink from "../../../../components/littleLink/LittleLink";
import { useThemeContext } from "../../../../contexts/theme-context";
import { parseJwt, validateEmail, validateUsername } from "../../../../utils";
import axios, { AxiosError } from "axios";
import { useUserContext } from "../../../../contexts/User-Context";

const validateLoginIdentityField = (value: unknown): boolean => {
  if (!value) {
    return false;
  }

  if (validateEmail(value) || validateUsername(value)) {
    return true;
  }

  return false;
};

function LoginMain() {
  const [prevScreenshot, setPrevScreenshot] = useState<string>(Screenshot1);
  const [nextScreenshot, setNextScreenshot] = useState<string>(Screenshot2);
  const [isActive, setIsActive] = useState<boolean>(true);
  const { theme } = useThemeContext();
  const { dispatch: dispatchUserData } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const identityFieldInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('pwd') as HTMLInputElement;

    const emailOrUsername = identityFieldInput?.value;
    const password = passwordInput?.value;
    if (!validateLoginIdentityField(emailOrUsername)) {
      alert('email/username format is not valid!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        emailOrUsername,
        password,
      });

      const accessToken = response?.data?.accessToken;

      if (accessToken) {
        const refreshToken = response.data.refreshToken;
        window.localStorage.setItem('accessToken', accessToken); // store accessToken in localStorage
        window.localStorage.setItem('refreshToken', refreshToken);
        const userPayload = parseJwt(accessToken);

        const userData = {
          isLoggedIn: true,
          email: userPayload.email,
          userId: userPayload.userId,
          username: userPayload.username,
          firstName: userPayload.firstName,
          lastName: userPayload.lastName,
          birthdate: userPayload.birthdate,
          devices: userPayload.devices || [],
        };

        dispatchUserData?.(userData); // update global state (context) on logged-in user
        navigate('/'); // navigate to home page
        
        //TODO - generate secret V
        //TODO - implement backend verify token V
        //TODO - use the verify in all api endpoints (posts) V
        //TODO - refresh token (/token)
        //TODO - implement logout
        //TODO - manage devices history (using the user-agent)
        //TODO send accessToken in each API request automatically
        //TODO - if we get 401 somehow - try to refresh token, if failed also - logout immediately
      }

    } catch (err: unknown) {
      alert(`Error occurred: ${(err as AxiosError).response?.data}`);
    }

    //TODO - if 200 - handle & store accessToken
  };

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
              <div className={`instagram-text-logo-container ${theme}-logo`}>
                <img src={InstagramTextLogo} alt="instagram text logo" />
              </div>
              <div className="text-inputs-container">
              <Input type="text" id="username" name="username" text="Phone number or email" htmlFor="username" validate={validateLoginIdentityField} />
              <Input type="password" id="pwd" name="pwd" text="Password" htmlFor="pwd" />
              </div>
              <div className="flex-item-wrapper">
                <Button text="Log in" name="login-submit" type={'button'} onClick={handleLogin} />
              </div>
              <div className="flex-item-wrapper">
                <div className="or-text">OR</div>
              </div>
              <div className="login-with-fb">
                <img src={FacebookLogo} alt="facebook logo" />
                Log in with Facebook
              </div>
              <LittleLink to={'/forgot-password'} text="Forgot password?" />
            </form>
            <div className="sign-up-section">
              <div className="create-account-text">
              Don't have an account? <Link to="/register"> Sign up</Link>
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
