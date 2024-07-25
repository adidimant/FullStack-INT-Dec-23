import instagramLogo from "../../assets/instagram-2.svg";
import './Navbar.scss'
import { memo } from 'react';

function NavBar() {
	return (
		<div className="login-page-navbar">
			<div className="login-page-navbar-inner">
				<div className="logo">
					<img src={instagramLogo} alt="instagramLogo" />
				</div>
				<div className="links">
					<button className="logIn-btn-nav">Log In</button>
					<button className="signup-btn">Sign Up</button>
				</div>
			</div>
		</div>
	);
}


export default memo(NavBar)
