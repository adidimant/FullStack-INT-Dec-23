import  { memo, useEffect, useState } from "react";
import storyImg2 from '../../assets/profile.jpg';
import Story from "./components/Story";
import "./Stories.css"

function Stories() {
	const [userData, setUserData] = useState([]);

	useEffect( () => {
		fetch("https://randomuser.me/api/?results=6")
		.then(response  => response.json())
		// .then(predata  => JSON.stringify(predata))
		.then(data => setUserData(data.results))
	},[])



	return (
		<div className="Stories">
			<Story username='ofer ben ami' profilePic={storyImg2}/>
			{userData ? userData.map((user: object, index: number) => {
				return <Story username={user.name.first} profilePic={user.picture.thumbnail }/>
			}) : <></>}
		</div>
	);
}

export default memo(Stories);
