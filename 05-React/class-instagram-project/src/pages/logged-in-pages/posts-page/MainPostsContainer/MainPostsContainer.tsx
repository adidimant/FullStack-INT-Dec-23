import { ReactNode, memo } from "react";
import Stories from "../components/Stories/Stories";
import Suggested from "../components/Suggested/Suggested";
import "./MainPostsContainer.css";

function MainPostsContainer(): ReactNode {
	return (
		<div className="MainPostsContainer">
			<div className="story-and-feed">
				<Stories />
				{/* Next lesson - inject Awni posts view */}
			</div>
      <Suggested/>
		</div>
	);
}

export default memo(MainPostsContainer);
