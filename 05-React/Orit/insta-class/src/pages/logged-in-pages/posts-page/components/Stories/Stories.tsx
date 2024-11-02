import  { memo, useEffect, useState } from "react";
import storyImg2 from '../../../../../assets/profile.jpg';
import Story from "./components/Story";
import { RandomPostApiResult } from "../../../types";
import "./Stories.css"

function Stories() {
	const [userData, setUserData] = useState([]);

	useEffect( () => {
		fetch("https://randomuser.me/api/?results=7")
		.then(response  => response.json())
		.then(data => setUserData(data.results))
	},[])



	return (
		<div className="Stories">
			<Story username='ofer ben ami' profilePic={storyImg2}/>
			{userData ? userData.map((user: RandomPostApiResult, index: number) => {
				return <Story key={index} username={user.name.first} profilePic={user.picture.thumbnail }/>
			}) : <></>}
		</div>
	);
}

export default memo(Stories);
