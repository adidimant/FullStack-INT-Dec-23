import { memo, useState, useEffect} from "react";
import profilePic from "../../../../../assets/profile.jpg";
import UserSuggested from "./UserSuggested/UserSuggested";
import { PostBackendAPI } from "../../../types";
import { appendServerPrefix } from "../../../../../utils";
import { axiosClient } from "../../../../../axiosClient";
import "./Suggested.css";
import { useThemeContext } from "../../../../../contexts/theme-context";

function Suggested() {
	const [userData, setUserData] = useState([]);
	const { theme }= useThemeContext()
	// In this example - we show if we get 500 from the server - we display the server content html instead of the regular html

	useEffect(() => {
		axiosClient.get('/api/posts?results=5')
			.then((response) => {
				setUserData(response.data);
			})
			.catch((error) => {
				const failedRes = error.response;
				const data = failedRes.data;
				console.log("final then data:", data);
				if (failedRes.status == 500 && data.startsWith && data.startsWith('<!DOCTYPE html>')) {
					document.body.innerHTML = data;
				}
			})
	}, []);

	return (
		<div className="Suggested">
			<UserSuggested
				profilePic={profilePic}
				userName="Ofer134"
				fullName="Ofer Ben Ami"
				switchOrFllow="Switch"
			/>
			<div className="suggested-for-you">
				<p>Suggested for you</p>
				<button style={{color: theme === 'dark' ? '#ffffff' : undefined}}>See All</button>
			</div>

			{userData.length > 0 ?  userData.map((user: PostBackendAPI, index: number) =>{
				return <UserSuggested
								key={index}
								profilePic={appendServerPrefix(user.imgUrl)}
								userName={user.userId}
								fullName = {`${user.userId}`}
								switchOrFllow="Follow"
							/>;
			}): <></>}
		</div> 
	);
}

export default memo(Suggested);
