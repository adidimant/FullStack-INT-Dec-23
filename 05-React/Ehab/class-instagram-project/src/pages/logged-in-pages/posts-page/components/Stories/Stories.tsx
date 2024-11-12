import  { memo, useEffect, useState } from "react";
import storyImg2 from '../../../../../assets/profile.jpg';
import Story from "./components/Story";
import { PostBackendAPI } from "../../../types";
import "./Stories.css"
import { appendServerPrefix } from "../../../../../utils";

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
			{userData ? userData.map((user: PostBackendAPI, index: number) => {
				return <Story key={index} username={user.userId} profilePic={appendServerPrefix(user.imgUrl)}/>
			}) : <></>}
		</div>
	);
}

export default memo(Stories);
