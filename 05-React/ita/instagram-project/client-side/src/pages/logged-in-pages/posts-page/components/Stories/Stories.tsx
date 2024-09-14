import  { memo, useEffect, useState } from "react";
import storyImg2 from '../../../../../assets/profile.jpg';
import Story from "./components/Story";
import { RandomPostApiResult } from "../../../types";
import "./Stories.css"

function Stories() {
	const [userData, setUserData] = useState([]);

	useEffect( () => {
		fetch("http://localhost:3000/api/posts?results=7")
		.then(response  => response.json())
		.then(data => setUserData(data))
	},[])



	return (
		<div className="Stories">
			<Story username='ofer ben ami' profilePic={storyImg2}/>
			{Array.isArray(userData) && userData.length > 0 ? 
			userData.map((user: RandomPostApiResult, index: number) => (
				<Story key={index} username={user.name.first} profilePic={user.picture.thumbnail} />
			)) : <p>No stories available</p>}
		</div>
	);
}

export default memo(Stories);
