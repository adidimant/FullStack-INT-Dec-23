import './SignUp.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import { memo, useState } from 'react';
import LoginForms from '../components/LoginForms';

function SignUp() {

    const [signUp, setSignUp] = useState(false); // State to store the sign up status 
    const [username, setUsername] = useState(''); // State to store the username entered by the user  
    const [password, setPassword] = useState(''); // State to store the password entered by the user 
    const [email, setEmail] = useState(''); // State to store the email entered by the user 
    const [fullname, setFullname] = useState(''); // State to store the full name entered by the user 

    const HandleChange = () => { // Function to change the page to the sign up page when the user clicks on the sign up button  
        setSignUp(true);
    }

    if (signUp) {
        return <LoginForms /> // If the user clicks on the sign up button the page will change to the login page 
    }

    return (
        <div className="container-signup">
            <div className="page-signup">
                <div className="pageone-signup">
                    <div className="first-container-signup">
                        <h1 className='title'>Instagram</h1>
                        <p className='p'>Sign up to see photos and videos from your friends.</p>
                        <div className="facebook-signup">
                            <FacebookIcon className="fb-signup" />
                            <button className='signup'>Log in with facebook </button>
                        </div>
                        <p className="or-signup">OR</p>
                        <input onChange={e => setEmail(e.target.value)} type="text" className='inpt-signup' placeholder='Mobile Number of Email' value={email} required />
                        <input onChange={e => setFullname(e.target.value)} type="text" className='inpt-signup' placeholder='Full Name' value={fullname} required />
                        <input onChange={e => setUsername(e.target.value)} type="text" className='username-signup inpt-signup' placeholder='Username' value={username} required />
                        <input onChange={e => setPassword(e.target.value)} type="text" className='password-signup inpt-signup' placeholder='Password' value={password} required />
                        <p className='info'>People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a></p>
                        <p className='info'>By signing up, you agree to our
                            <a href=""> Terms ,</a>
                            <a href=""> Privacy ,</a>
                            <a href="">Policy </a> and
                            <a href=""> Cookies Policy</a> .
                        </p>
                        <button className='signupbtn-signup'>Sign up</button>
                    </div>
                    <div className="second-container-signup">
                        <p className="login-signup">Have an account? <button onClick={HandleChange}>Log in</button></p>
                    </div>

                    <div className="third-container-signup">
                        <p className="get-the app-signup">Get the app</p>
                    </div>

                    <div className="forth-container-signup">
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="app Link" className="app-signup appone-signup" />
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="app Link" className="app-signup" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(SignUp)
