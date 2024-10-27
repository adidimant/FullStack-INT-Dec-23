import  { memo, useEffect, useState } from "react";
import Story from "./components/Story";
import { PostType/*, RandomPostApiResult*/ } from "../../../types";
import "./Stories.css"
import { useRefreshContext } from "../../../../../contexts/refresh-context";

function Stories() {
	const [userData, setUserData] = useState([]);
	const { value } = useRefreshContext();

	/*if(value && userData.length == 0){
        setValue(false);
    }*/
	useEffect( () => {
		if(userData.length == 0){
			fetch("http://localhost:3000/api/posts?results=7")
			.then(response  => response.json())
			.then(data => setUserData(data))
		}
	},[userData])

	if(value && userData.length != 0){
        setUserData([]);
    }

	return (
		<div className="Stories">
			{/*<Story username='ofer ben ami' profilePic={storyImg2}/>*/}
			{userData ? userData.map((user: PostType, index: number) => {
				return <Story key={index} username={user.userId} profilePic={user.imgUrl }/>
			}) : <></>}
		</div>
	);
}

export default memo(Stories);
