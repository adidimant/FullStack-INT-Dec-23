import { ReactNode, memo } from "react";
import NavBar from "../navbar/Navbar";
import instagramLogo from "../../assets/instagram-2.svg";
import facebookLogo from "../../assets/Facebook_logo_(square).png";
import getGooglePlay from '../../assets/getgoogleplay.png'
import getMicrosoft from '../../assets/getmicrosoft.png'

import "./LoginPage.scss";

function LoginPage(): ReactNode {
	return (
		<>
			<NavBar />
			<div className="login-page-container">
				<div className="login-div">
					<img
						className="instagram-logo"
						src={instagramLogo}
						alt="instagramLogo"
					/>
					<div className="login-username-password">
						<input
							className="inputs"
							type="text"
							name="username"
							id="username"
							placeholder="Phone number, username, or email"
						/>
						<input
							className="inputs"
							type="text"
							name="password"
							id="password"
							placeholder="Password"
						/>
						<button id="login-btn">Log in</button>
					</div>
					<div className="or-hr">
						<hr />
						OR <hr />
					</div>
					<div className="login-w-facebook">
						<button className="facebook-btn">
							<span>
								<img src={facebookLogo} alt="" />
							</span>
							<span id="login-facebook-span">Log in with Facebook</span>
						</button>
					</div>
					<div className="forgot-pass">
						<button className="forgot-pass-btn">Forgot password?</button>
					</div>
				</div>
				<div className="dont-have-acc-div">
					<p>
						Don't have an account?
						<button className="signup-btn">Sign up</button>
					</p>
				</div>
				<div className="get-the-app-div">
					<p>Get the app.</p>
          <div className="get-apps">
            <img className="google-app-img" src={getGooglePlay} alt="getGooglePlay" />
            <img className="microsoft-app-img" src={getMicrosoft} alt="getMicrosoft" />
          </div>
				</div>
			</div>
		</>
	);
}

export default memo(LoginPage);
