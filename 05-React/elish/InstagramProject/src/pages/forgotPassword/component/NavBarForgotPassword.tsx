import { memo, ReactNode } from 'react';
import instagramLogo from '../../login/assets/instagram-text-logo.png'
import './NavBarForgotPassword.css';
import { Link } from 'react-router-dom';

function NavBarForgotPassword(): ReactNode{
    return(
        <div className='nav'>
            <Link to={'/'}><img src={instagramLogo} alt="instagram-logo"/></Link>
        </div>
    )
}

export default memo(NavBarForgotPassword);