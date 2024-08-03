import { memo } from 'react'
import BasicPageFooter from '../BasicPageFooter'
import LockImg from '../../assets/LockImg.jpg'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import './ForgetPassword.css'


function ForgetPassword() {


    const isValidUsername = (value: unknown) => {
        if (typeof value === 'string' && value.length > 4) {
            return true;
        }
        return false;
    }
    return (

        <>
            <div className="forgetPwd-page">
                <div className='forgetPwd-nav'>
                    <p><Link to={'/login'}> Instagram</Link></p>
                </div>
                <div className="forgetPwd-main">
                    <div className="forgetPwd-container">
                        <div className="forgetPwd-logo">
                            <img src={LockImg} alt="Lock-logo" />
                        </div>
                        <div className="forgetPwd-info">
                            <p className='info-p'>Trouble logging in?</p>
                            <p className='info-p2'>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                        </div>
                        <div className="forgetPwd-inpt">
                            <Input type='text' id='username' name='username' text='Email, Phone or Username' htmlFor='username' validate={isValidUsername} />
                        </div>
                        <div className="forgetPwd-submit">
                            <Button text='Send Login Link' name='send-link-submit' onClick={() => { }} />
                        </div>
                        <div className="reset-pwd">
                            <span><Link to={'/'}>Can't reset your password?</Link></span>
                        </div>
                        <div className="forgetPwd-or">
                            <p>OR</p>
                        </div>
                        <div className="forgetPwd-newAcc">
                            <span><Link to={'/register'}>Create new account</Link></span>
                        </div>
                        <div className="forgetPwd-login">
                            <span> <Link to={'/login'}>Back to login</Link> </span>
                        </div>
                    </div>
                </div>
            </div>

            <BasicPageFooter />

        </>
    )
}

export default memo(ForgetPassword)
