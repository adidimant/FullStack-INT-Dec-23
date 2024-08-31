import  { memo, useEffect, useMemo, useState } from "react";
import storyImg2 from '../../../../../assets/profile.jpg';
import Story from "./components/Story";
import { RandomPostApiResult } from "../../../types";
import { useThemeContext } from "../../../../../contexts/theme-context";
import "./Stories.css"
import '../../../../../contexts/theme-style.css'
function Stories() {
	const [userData, setUserData] = useState([]);

	useEffect( () => {
		fetch("https://randomuser.me/api/?results=7")
		.then(response  => response.json())
		.then(data => setUserData(data.results))
	},[])

	const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);


	return (
		<div className= {isDark ? 'Stories dark' : 'Stories light'}>
			<Story username='ofer ben ami' profilePic={storyImg2}/>
			{userData ? userData.map((user: RandomPostApiResult, index: number) => {
				return <Story key={index} username={user.name.first} profilePic={user.picture.thumbnail }/>
			}) : <></>}
		</div>
	);
}

export default memo(Stories);
