import  { memo, useEffect, useState } from "react";
import storyImg1 from '../../assets/story-img-1.jpg';
import storyImg2 from '../../assets/profile.jpg';
import profilePic3 from '../../assets/tweets.jpg'
import Story from "./components/Story";
import "./Stories.css"

function Stories() {
	const [userData, setUserData] = useState({});

	useEffect( () => {
		fetch("https://randomuser.me/api/?results=10")
		.then(response  => response.json())
		// .then(predata  => JSON.stringify(predata))
		.then(data => {
			setUserData(data)
			const stringData = JSON.stringify(data.results)
			console.log(`fetching is done, the data is: ${stringData}`)
		})
	},[])



	return (
		<div className="Stories">
			<Story username={userData.results[0].gender} profilePic={storyImg2}/>
			<Story username='pishpeshuk' profilePic={storyImg1}/>
			<Story username='tweetSrael' profilePic={profilePic3}/>
			<Story username='ofer ben ami' profilePic={storyImg2}/>
			<Story username='ofer ben ami' profilePic={storyImg2}/>

		</div>
	);
}

export default memo(Stories);
