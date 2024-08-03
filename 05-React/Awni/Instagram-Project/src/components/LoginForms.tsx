import './LoginForms.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import instaImg from '../assets/instaImg.png';
import instaImg1 from '../assets/instaImg1.png';
import { memo, useState } from 'react';
import SignUp from '../SignUPComponent/SignUp';
import { Link } from 'react-router-dom';

function LoginForms() {

    const [username, setUsername] = useState(''); // State to store the username entered by the user 
    const [password, setPassword] = useState(''); // State to store the password entered by the user 

    const [signUp, setSignUp] = useState(false);

    const HandleChange = () => {// Function to change the page to the sign up page when the user clicks on the sign up button 
        setSignUp(true);
    }

    if (signUp) {
        return <SignUp /> // If the user clicks on the sign up button the page will change to the login page  
    }

    return (
        <div className="container">
            <div className="page">
                <img src={instaImg1} alt="img-insta" className='instaImg1' />
                <img src={instaImg} alt="img-insta" className='instaImg' />
                <div className="pageone">
                    <div className="first-container">
                        <h1 className='title'>Instagram</h1>
                        <input onChange={e => setUsername(e.target.value)} type="text" className='username inpt' placeholder='Phone, username, or email' value={username} required />
                        <input onChange={e => setPassword(e.target.value)} type="text" className='password inpt' placeholder='Password' value={password} required />
                        <button className='loginbtn'>Log in</button>
                        <p className="or">OR</p>
                        <div className="facebook">
                            <FacebookIcon className="fb" />
                            <p className='logfb'>Log in with facebook </p>
                        </div>
                        <p className="pass">Forgotten your password</p>
                    </div>
                    <div className="second-container">
                        <p className="signup-login">Don't have an account? <button type='submit' onClick={HandleChange}><Link to={'/register'}>Sign up</Link></button></p>
                    </div>

                    <div className="third-container">
                        <p className="get-the app">Get the app</p>
                    </div>

                    <div className="forth-container">
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="app Link" className="app appone" />
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="app Link" className="app" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default memo(LoginForms)
