import { memo } from "react";

function Story({username,profilePic,}: { username: string;profilePic: string;}) {
	return (
		<div className="user-story">
			<img src={profilePic} alt="storyImg1" />
			<span className="user-name">{username}</span>
		</div>
	);
}

export default memo(Story);
