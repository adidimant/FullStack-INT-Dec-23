import { memo, ReactNode } from 'react';
import NavBarForgotPassword from './component/NavBarForgotPassword';
import FooterLogin from '../login/component/FooterLogin';
import lockImg from './assets/lock.png';
import './ForgotPassword.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

function ForgotPassword(): ReactNode{
    return(
        <div className='container'>
            <NavBarForgotPassword/> 
            <div className='forgotPassword-container'>
                <div className='forgotPassword-form'>
                    <div className='forgotPassword-lock'>
                        <img src={lockImg} alt="lock"/>
                    </div>
                    <div className='text'>
                        Trouble logging in?
                    </div>
                    <div className='forgotPassword-text'>
                        Enter your email, phone, or username and we'll 
                        send you a link to get back into your account.
                    </div>
                    <div className='forgotPassword-input'>
                        <Input name='emailPhoneOrUser' text='Email, Phone or Username' htmlFor='emailPhoneOrUser' type='text' id='emailPhoneOrUser'/>
                    </div>
                    <div className='forgotPassword-btn'>
                        <Button name='forgotPassword-btn' text='Send login link' onClick={()=>{}}/>
                    </div>
                    <div className='forgotPassword-span'>
                        <Link to={''}>can't reset your password?</Link>
                    </div>
                    <div className="flex-item-wrapper">
                        <div className="or-text">OR</div>
                    </div>
                    <div className='forgotPassword-span2'>
                        <Link to={'/register'}>Create new account</Link>
                    </div>
                </div>
                <div className='forgotPassword-form-button'>
                    <Link to={'/'} className='link-back'> Back to login</Link>
                </div>
            </div>
            <FooterLogin/>
        </div>
       
    );
}

export default memo(ForgotPassword);