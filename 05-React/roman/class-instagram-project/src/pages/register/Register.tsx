import LoginFooter from '../login/LoginFooter';
import './Register.scss'
// import Button from '../../components/button/Button';
import { Link } from 'react-router-dom'
function Register() {

    return (
        <div className="register-form-wrapper">
            <div className="register-form">
                <div className="register-form-logo"></div>
                <div className="register-form-title">Sign up to see photos and videos from your friends.</div>
                <button className='facebookLogIn'  ><span></span>Log In With Facebook</button>
                <div className="separator-container">
                    <div className="separator-line"></div>
                    <span className="separator-text">OR</span>
                    <div className="separator-line"></div>
                </div>

                <input type="text" name='phone' placeholder='Mobile Number or Email' />
                <input type="text" name='name' placeholder='Full Name' />
                <input type="text" name='username' placeholder='Username' />
                <input type="password" name='password' placeholder='Password' />
                <div className='register-form-text'>
                    <p>People who use our service may have uploaded your contact information to Instagram. <Link to="">Learn More</Link></p>
                    <p>By signing up, you agree to our Terms , <Link to="">Privacy Policy</Link> and <Link to="">Cookies Policy</Link> .</p>
                </div>

                <button className='register-form-btn'>Sign Up</button>

            </div>
            <div className="register-sign-up">Have an account? <Link to={'/LogIn'} style={{ textDecoration: 'none'}}>Log In</Link></div>
            <div className="download-links">
                <div className="download-links-text">Get the app</div>
                <Link to=""><img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" className="download-links-google" /></Link>
                <Link to=""><img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" className="download-links-microsoft" /></Link>



            </div>
            <LoginFooter />
        </div>
       
    )
}
export default Register;