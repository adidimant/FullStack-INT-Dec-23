import { memo, useState, useEffect } from "react";
import profilePic from "../../../../../assets/profile.jpg";
import UserSuggested from "./UserSuggested/UserSuggested";
import "./Suggested.css";
import { RandomPostApiResult } from "../../../types";

function Suggested() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/posts?results=5")
			.then((response) => response.json())
			.then((data) => setUserData(data));
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

			{userData.length > 0 ? userData.map((user: RandomPostApiResult, index: number) => {
				return <UserSuggested
					key={index}
					profilePic={user.picture.thumbnail}
					userName={user.login.username}
					fullName={`${user.name.first} ${user.name.last}`}
					switchOrFllow="Follow"
				/>;
			}) : <></>}
		</div>
	);
}

export default memo(Suggested);
