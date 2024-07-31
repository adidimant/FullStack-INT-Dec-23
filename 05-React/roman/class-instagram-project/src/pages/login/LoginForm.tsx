import './LoginForm.scss'
import { Link } from 'react-router-dom';
function LoginForm() {

    return (
        
        <div className="login-form-wrapper">
        <div className="login-form">
            <div className="login-form-logo"></div>
            <input type="text" name='Phone' placeholder='Phone number, username, or email' />
            <input type="password" name='password' placeholder='Password' />
            <button className='login-form-btn'>Log In</button>
            <div className="separator-container">
                <div className="separator-line"></div>
                <span className="separator-text">OR</span>
                <div className="separator-line"></div>
            </div>
            <div className="login-form-links">
                <button className="facebook-btn">
                <span className="facebook-btn-logo"></span>
                <span className="facebook-btn-text">Log in with Facebook</span>
                </button>
                <button className='forgot-pass-btn'>Forgot password?</button>
            </div>

        </div>
        <div className="login-sign-up">Don't have an account? <Link to={'/register'} style={{ textDecoration: 'none'}}>Signup</Link></div>
        <div className="download-links">
        <div className="download-links-text">Get the app</div>
        <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" className="download-links-google" />
        <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" className="download-links-microsoft" />

            
            
            </div>
        </div>
    )
}

export default LoginForm;