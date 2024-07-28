import './LogingPage.css';
import { memo } from 'react';

function LogingPage() {
    return (
        <div className='login__nav'>
            <div className='logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027' alt='Instagram' />
            </div>
            <div className='buttons'>
                <button className='login'>Login</button>
                <button className='signup'>Sign Up</button>
            </div>
        </div>
    )
}

export default memo(LogingPage);
