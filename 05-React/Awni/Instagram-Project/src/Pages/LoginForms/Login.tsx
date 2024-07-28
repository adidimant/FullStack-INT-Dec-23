import './Login.css';


function Login() {
    return (
        <div className='login-container'>
            <div className='login-image'>
                <img src="https:/i.imgur.com/P3Vm1Kq.png" alt='instagram' />
            </div>
            <div className='login-form'>
                <h1>Login</h1>
                <form>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button>Login</button>
                </form>
                <div className="signup-button">
                    <span>Don't have and account</span>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login
