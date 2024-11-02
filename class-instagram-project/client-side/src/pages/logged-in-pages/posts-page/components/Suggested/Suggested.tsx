import { memo, useState, useEffect} from "react";
import profilePic from "../../../../../assets/profile.jpg";
import UserSuggested from "./UserSuggested/UserSuggested";
import "./Suggested.css";
import { PostBackendAPI } from "../../../types";
import { appendServerPrefix } from "../../../../../utils";

function Suggested() {
	const [userData, setUserData] = useState([]);

	// In this example - we show if we get 500 from the server - we display the server content html instead of the regular html

	useEffect(() => {
		fetch("http://localhost:3000/api/posts?results=5")
			.then((response) => {
				if (response.status < 500) {
					return response.json();
				}
				return response.text(); // convert content to text (since in 5xx errors our server returns html as response)
			})
			.then((data) => {
				if (data.startsWith && data.startsWith('<!DOCTYPE html>')) {
					document.body.innerHTML = data;
				} else {
					setUserData(data);
				}
			});
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
				<button>See All</button>
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
