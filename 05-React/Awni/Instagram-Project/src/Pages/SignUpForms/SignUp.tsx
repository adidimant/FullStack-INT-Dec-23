import './SignUp.css'
import FacebookIcon from '@mui/icons-material/Facebook';

function SignUp() {
    return (

        

        <>
            <div className='signup-container'>
                <div className="head-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="Instagram logo" />
                    <p>Sign up to see photos and videos from your friends</p>
                    <div className="facebook">
                        <span> <FacebookIcon /> </span>
                        <button>Login with Facebook</button>
                    </div>
                </div>
                <div className="signup-forms">
                    <h1>OR</h1>
                    <form >
                        <input type='text' placeholder='Full Name' />
                        <input type='text' placeholder='Username' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <p>People who use our service may have uploaded your contact information to Instagram. Learn More
                            </p>
                            <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                        <button >Sign Up</button>
                    </form>
                </div>

            </div>

            <div className="login-button">
                <span>Have an account?</span>
                <button>Log in</button>
            </div>
        </>
    )
}

export default SignUp
