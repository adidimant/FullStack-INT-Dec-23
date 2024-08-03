import { memo, useEffect, useState } from 'react'
import BasicPageFooter from '../BasicPageFooter'
import LockImg from '../../assets/LockImg.jpg'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import './ForgetPassword.css'


function ForgetPassword() {

    const [username, setUsername] = useState<string>('')
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)


    const isValidUsername = (value: unknown): boolean => {
        if ((typeof value === 'string' && value.length > 4) || (typeof value === 'string' && value.includes('@')) || (typeof value === "number" && value.toString().length === 10)) {
            return true;
        }
        return false;

    }


    const noUserFound = () => {
        const userNotFoundEle = document.querySelector('.userNotFound') as HTMLDivElement;

        if (!isValidUsername(username)) { // if username is invalid 
            userNotFoundEle.style.display = 'block'; // show user not found message 
            userNotFoundEle.innerHTML = 'User not found'; // set message to user not found 
            setTimeout(() => { 
                userNotFoundEle.style.display = 'none';
            }, 5000);
            return;
        }

        userNotFoundEle.style.display = 'none'; // hide user not found message  
    }

    useEffect(() => { // disable button if input is empty or invalid username  
        if (username === ''){
            setIsButtonDisabled(true) // disable button if input is empty 
        } else {
            setIsButtonDisabled(false) // enable button if input is not empty 
        }
    }, [username])




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
                            <Input type='text' id='username' name='username' text='Email, Phone or Username' htmlFor='username' validate={isValidUsername} onChange={(e) => setUsername(e.target.value)} /> 
                            
                        </div>
                        <div className="forgetPwd-submit">
                            <Button text='Send Login Link' name='send-link-submit' onClick={noUserFound} className='btn-forgetPwd' btnDisabled={isButtonDisabled} />
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
            <div className='userNotFound'></div>
        </>
    )
}

export default memo(ForgetPassword)
