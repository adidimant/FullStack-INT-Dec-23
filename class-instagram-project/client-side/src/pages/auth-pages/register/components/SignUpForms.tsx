import { ChangeEvent, memo, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../../../../components/input/Input';
import Button from "../../../../components/button/Button";
import LittleLink from '../../../../components/littleLink/LittleLink';
import InstagramTextLogo from '../../../../assets/instagram-text-logo.png';
import WhiteFacebookLogo from "../../../../assets/WhiteFacebookLogo.png";
import GooglePlay from '../../../../assets/google-play.png';
import Microsoft from '../../../../assets/microsoft.png';
import "../Register.css";
import '../../../../light-dark.css'
import { useThemeContext } from "../../../../contexts/theme-context";
import axios from "axios";
import { validateEmail, validateFullName, validatePassword, validateUsername } from "../../../../utils";


function RegisterForms() {
  const { theme } = useThemeContext();
  const [image, setImage] = useState<File | null>(null);

  const navigate = useNavigate();

  const uploadImage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  },[]);

  const handleSubmitRegister = async () => {
    const formData = new FormData();

    const emailInput = document.getElementById("emailOrPhone") as HTMLInputElement;
    const fullNameInput = document.getElementById("fullName") as HTMLInputElement;
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const birthdateInput = document.getElementById("birthdate") as HTMLInputElement;

    const firstName = fullNameInput?.value?.split(" ")?.[0];
    const lastName = fullNameInput?.value?.slice(firstName.length + 1);
    const email = emailInput?.value;
    const username = usernameInput?.value;
    const password = passwordInput?.value;
    const birthdate = birthdateInput?.value;

    if (!firstName || !email || !username || !password || !birthdate) {
      alert("One of the required fields is missing!");
    } else {
      formData.append('email', emailInput?.value);
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('birthdate', birthdate);
      if (image) {
        formData.append('profilePic', image);
      }

      try {
        const result = await axios({
          method: "put",
          url: "http://localhost:3000/api/users/register",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        if (result.status == 201) {
          setTimeout(() => {
            navigate('/login');
          }, 3000);
          alert("User registered successfully! Please Log-In to continue");
        } else {
          alert("Failed registering the user.");
        }
      } catch (error) {
        console.error("Error uploading post:", error);
        alert("An error occurred while uploading the post.");
      }
    }
  };

    return (
       <div className="main">
        <div className="register-container">
         <form className="login-form register-form">
           <div className="instagram-text-logo-container">
             <img className={`${theme}-logo`} src={InstagramTextLogo} alt="instagram text logo" />
           </div>
           <div className="short-explanation-container">
            <span>Sign up to see photos and videos from your friends.</span>
           </div>
           <Button name="facebook-btn"
            text="Log in with Facebook" 
            onClick={() => {}} 
            img={WhiteFacebookLogo} 
            altImg="facebook logo" 
            className="general-btn-height"/>
            <div className="flex-item-wrapper">
              <div className="or-text">OR</div>
           </div>
           <div className="text-inputs-container">
              <Input required name="emailOrPhone" text="Mobile number or email address" htmlFor="emailOrPhone" type="text" id="emailOrPhone" validate={validateEmail} />
              <Input required name="Full Name" text="Full Name" htmlFor="Full Name" type="text" id="fullName" validate={validateFullName}/>
              <Input required name="Username" text="Username" htmlFor="Username" type="text" id="username" validate={validateUsername}/>
              <Input required name="Password" text="Password" htmlFor="Password" type="Password" id="password" validate={validatePassword}/>
              <Input required name="Birthdate" htmlFor="Birhtdate" type="date" id="birthdate"/>
              <Input name="profilePic" htmlFor="ProfilePic" type="file" id="profilePic" onChange={uploadImage} />
           </div>
           <p className="Links-to-information">
            <span>People who use our service may have uploaded your contact information to Instagram. 
              <LittleLink text="learn more" to={""} />.</span>
              <br />
              <br />
            <span>By signing up, you agree to our 
            <LittleLink text="Terms" to={""} />, 
            <LittleLink text="Privacy Policy" to={""} /> and   
            <LittleLink text="Cookies Policy" to={""} />.</span>
           </p>
          <Button 
            name="Sign Up"
            text="Sign Up" 
            onClick={handleSubmitRegister}
            className="bth-signup"/>
         </form>
         <div className="sign-up-section">
            <div className="create-account-text">
            Have an account? <span className="navbar-signup-link"><Link to={'/login'} style={{ textDecoration: 'none'}}>Log in</Link></span>
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
    )
}

export default memo(RegisterForms)