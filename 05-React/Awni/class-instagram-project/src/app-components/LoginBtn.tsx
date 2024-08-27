import { memo } from 'react';
import { useUserContext } from "../contexts/islogin-context/IsLogin";
import '../App.css';

function LoginBtn() {
    const { isLoggedIn, toggleLogin } = useUserContext(); // קבל את מצב הכניסה ואת פונקציית החלפת מההקשר

    return (
        <div>
            <button className='login-btn' onClick={toggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
}

export default memo(LoginBtn);