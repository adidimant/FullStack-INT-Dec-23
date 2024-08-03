import { ReactNode, memo } from "react";
import Stories from "../components/Stories/Stories";
import Suggested from "../components/Suggested/Suggested";
import "./MainPostsContainer.css";
import PostInfo from "../components/Post-Info/PostInfo";

function MainPostsContainer(): ReactNode {
	return (
		<div className="MainPostsContainer">
			<div className="story-and-feed">
				<Stories />
				<PostInfo />
			</div>
			<Suggested />
		</div>
	);
}

export default memo(MainPostsContainer);
