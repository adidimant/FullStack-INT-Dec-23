import InstagramTextLogo from "./assets/instagram-text-logo.png";
import { Link } from 'react-router-dom';
import GooglePlay from "./assets/google-play.png";
import Microsoft from "./assets/microsoft.png";
import Button from "../../components/button/Button";
import './RegisterPage.css'


function RegisterPage(){
    return <> 
     <div>
<div className="container-form">
    <form>
    <div className="instagram-text-logo-container">
           <img src={InstagramTextLogo} alt="instagram text logo" />
    </div>
    <b>You must register to see photos and videos of friends</b>
    <div>
        <Button text= "Connect with Facebook" name="singWithFacebook" />
        <div className="or-text">OR</div>
    </div>
        <div>
    <label htmlFor="phoneOrEmail"></label>
    <input type="text" id="phoneOrEmail" placeholder="Phone or Email" required /> 
    </div>
    <div>
        <label htmlFor="fname"></label>
        <input type="text" id="fname" placeholder="Full name" required/>
    </div>
    <div>
        <label htmlFor="username"></label>
        <input type="text" id="username" placeholder="Username" required/>   
    </div>
    <div>
        <label htmlFor="password"></label>
        <input type="text" id="password" placeholder="Password" required pattern="(?=.*[A-Z])(?=.*[!@#$&*]).{8,}" title=" The password must have at least 8 characters, at least one uppercase character and at least one special character like !@#$&* "/>   
    </div>
    <p>People who use our service may have uploaded your contact information to Instagram. Additional information</p>
    <p>Registering constitutes your agreement to our terms, privacy policy and cookie policy.</p>
       <Button text= "הירשם/הירשמי" name="register" />
    </form>

    <div>Do you have an account? <Link to="/">Log In</Link> </div>
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
    </> 
}

export default RegisterPage;