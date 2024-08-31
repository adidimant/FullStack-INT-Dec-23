import { memo, useState, useEffect, useMemo} from "react";
import profilePic from "../../../../../assets/profile.jpg";
import UserSuggested from "./UserSuggested/UserSuggested";
import { RandomPostApiResult } from "../../../types";
import { useThemeContext } from "../../../../../contexts/theme-context";
import "./Suggested.css";
import '../../../../../contexts/theme-style.css'
function Suggested() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=5")
			.then((response) => response.json())
			.then((data) => setUserData(data.results));
	}, []);
	const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
	return (
		<div className= {isDark ? 'Suggested dark' : 'Suggested light'}>
			<UserSuggested
				profilePic={profilePic}
				userName="Ofer134"
				fullName="Ofer Ben Ami"
				switchOrFllow="Switch"
			/>
			<div className= {isDark ? 'suggested-for-you dark' : 'suggested-for-you light'}>
				<p>Suggested for you</p>
				<button>See All</button>
			</div>

			{userData.length > 0 ?  userData.map((user: RandomPostApiResult, index: number) =>{
				return <UserSuggested
								key={index}
								profilePic={user.picture.thumbnail}
								userName={user.login.username}
								fullName = {`${user.name.first} ${user.name.last}`}
								switchOrFllow="Follow"
							/>;
			}): <></>}
		</div> 
	);
}

export default memo(Suggested);
