import { ReactNode, memo } from "react";
import { Link } from "react-router-dom";
import  googlestore from "./img/googlestore.png";
import microsoftstore from "./img/microsoftstore.png";
import facebook_1384053 from "./img/facebook_1384053.png"
import './LoginPage.css';


function LoginPage(): ReactNode {
  return (
    
    <div className="login-page-container">
      <div className="login-page-navbar">
        <div className="logo">asd</div>
        <div className="links"><button>Signup</button></div>
      </div>

      <div className="main">
        <div className="photo-carousel"></div>
        <div className="forms-container">
          <div className="box">
          <img className="logo" src="https://logos-marques.com/wp-content/uploads/2020/09/Logo-Instagram.png"></img>
              <form className="form-login">
                <div className="input-container">
                    <input type="text" placeholder=" " className="input-forms" required />
                    <label className="label-forms">Phone number, username, or email</label>
                </div>
                <div className="input-container">
                    <input type="text" placeholder=" " className="input-forms" required />
                    <label className="label-forms">Password</label>
                </div>
                  <button className="login-button">Log In</button>
                  <div className="beyond-or">
                    <div className="line"></div>
                    <div className="or">OR</div>
                    <div className="line"></div>
                  </div>
                  <Link className="loginFacbook">
                    <img src={facebook_1384053} className="icon-f"/>
                    <span className="login-f">Log in with Facebook</span>
                  </Link>

                  <Link className="forget-password">forget password?</Link>
              </form>
          </div>

          <div className="box2">
            <div>Don't have an account?</div>
            <Link className="Sing-Up">Sing Up</Link>
          </div>

          <div className="box3">
            <p>Get the app</p>
            <div className="store-contaner">
              <img className="link-store" src={microsoftstore} />
              <img className="link-store" src={googlestore} />
            </div>
            
          </div>

        </div>

      </div>
    </div>
  );
}



export default memo(LoginPage);