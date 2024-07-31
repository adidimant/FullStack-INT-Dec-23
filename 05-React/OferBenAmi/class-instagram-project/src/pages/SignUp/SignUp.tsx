import { memo } from "react"
import Navbar from "../generalComponents/NavBar/Navbar"
import Footer from '../generalComponents/Footer/Footer'
import InstagramTextLogo from "../login/assets/instagram-text-logo.png";
import whiteFbLogo from '../../assets/fblogo.png'
import './SignUp.css'

function SignUp() {
    return (
        <>
        <div className="login-page-container">
        <Navbar/>
        <main className="main">
        <>
      <main className="main">
        <div className="container">
          <div className="right-container">
            <form className="login-form">
              <div className="instagram-text-logo-container">
                <img src={InstagramTextLogo} alt="instagram text logo" />
              </div>
              <div className="sign-text">
                <span>Sign up to see photos and videos from your friends.</span>
              </div>
              <div className="log-in-with-fb">
                <button className="log-in-with-fb-btn"><img className="fb-logo" src={whiteFbLogo} alt="whiteFbLogo" /><span>Log in with Facebook</span></button>
              </div>
              <div className="flex-item-wrapper">
                <div className="or-text">OR</div>
              </div>
              <div className="text-inputs-container">
                <div className="input-wrapper">
                  <label htmlFor="username" className= "active" >
                    Phone number, username or email
                  </label>
                  <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="pwd" className= "active">
                    Password
                  </label>
                  <input type="password" id="pwd"  />
                </div>
              </div>
              <div className="flex-item-wrapper">
                <input type="submit" value="Log in" />
              </div>
              <div className="flex-item-wrapper">
                <div className="or-text">OR</div>
              </div>
              <div className="login-with-fb">
                Log in with Facebook
              </div>
              <div className="forgot-password">Forgot password?</div>
            </form>
            <div className="sign-up-section">
              <div className="create-account-text">
              </div>
            </div>
            <div className="get-app-section">
              <div className="get-app-text">Get the app.</div>
              <div className="get-app-img-container">
                <div className="google-play">

                </div>
                <div className="microsoft">
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
        </main>
        <Footer />
        </div>
        </>
    )
}

export default memo(SignUp)
