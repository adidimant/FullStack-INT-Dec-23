import  { memo, useEffect, useState } from "react";
import Story from "./components/Story";
import { PostBackendAPI } from "../../../types";
import { appendServerPrefix } from "../../../../../utils";
import { axiosClient } from "../../../../../axiosClient";
import { useThemeContext } from "../../../../../contexts/theme-context";
import "./Stories.css"
import '../../../../../light-dark.css'
function Stories() {
	const { theme }= useThemeContext()
	const [userData, setUserData] = useState([]);

	useEffect( () => {
		axiosClient.get('/api/posts?results=7')
		.then(response => setUserData(response.data))
	},[])



	return (
		<div className={`Stories ${theme}-background`}>
			{userData ? userData.map((user: PostBackendAPI, index: number) => {
				return <Story key={index} username={user.userId} profilePic={appendServerPrefix(user.imgUrl)}/>
			}) : <></>}
		</div>
	);
}

export default memo(Stories);
