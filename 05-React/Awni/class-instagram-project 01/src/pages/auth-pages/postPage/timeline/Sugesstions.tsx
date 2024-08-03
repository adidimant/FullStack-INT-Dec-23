import './Sugesstions.css';
import { Avatar } from '@mui/material';

const Sugesstions = () => {
    return (
        <div className='sugessions'>
            <div className="sugession__username">
                <div className="username__left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className="username">Awni_</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow__button">Follow</button>
            </div>
            <div className="sugessions__title">Sugessions for you</div>
            <div className="sugessions__usernames">
                <div className="sugession__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">Awni_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>
                <div className="sugession__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">Awni_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>
                <div className="sugession__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">Awni_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>
                <div className="sugession__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">Awni_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>
            </div>
        </div>
    );
};

export default Sugesstions;