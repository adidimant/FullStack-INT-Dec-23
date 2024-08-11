import { ReactNode, memo } from "react";
import Stories from "../components/Stories/Stories";
import Suggested from "../components/Suggested/Suggested";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import "./PostsMainContent.css";

function PostsMainContent(): ReactNode {
	return (
		<div className="MainPostsContainer">
			<div className="story-and-feed">
				<Stories />
				<PostsContainer />
			</div>
      <Suggested/>
		</div>
	);
}

export default memo(PostsMainContent);
