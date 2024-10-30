import { memo, useState, useEffect} from "react";
import UserSuggested from "./UserSuggested/UserSuggested";
import "./Suggested.css";
import {PostType/*, RandomPostApiResult*/ } from "../../../types";
import { useRefreshContext } from "../../../../../contexts/refresh-context";

function Suggested() {
	const [userData, setUserData] = useState([]);
	const { value } = useRefreshContext();
	// In this example - we show if we get 500 from the server - we display the server content html instead of the regular html
	/*if(value && userData.length == 0){
        setValue(false);
    }*/

	useEffect(() => {
		if(userData.length == 0){
			fetch("http://localhost:3000/api/posts")
			.then((response) => {
				if (response.status < 500) {
					return response.json();
				}
				return response.text(); // convert content to text (since in 5xx errors our server returns html as response)
			})
			.then((data) => {
				if (data.startsWith && data.startsWith('<!DOCTYPE html>')) {
					document.body.innerHTML = data;
				} else {
					setUserData(data);
				}
			});
		}
	}, [userData]);
	
	if(value && userData.length != 0){
        setUserData([]);
    }
	return (
		<div className="Suggested">
			<div className="suggested-for-you">
				<p>Suggested for you</p>
				<button>See All</button>
			</div>

			{userData.length > 0 ?  userData.map((user: PostType, index: number) =>{
				return <UserSuggested
								key={index}
								profilePic={user.imgUrl}
								userName={user.userId}
								fullName = {user.userId}
								switchOrFllow="Follow"
							/>;
			}): <></>}
		</div> 
	);
}

export default memo(Suggested);
