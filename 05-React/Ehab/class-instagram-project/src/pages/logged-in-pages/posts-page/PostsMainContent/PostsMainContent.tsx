import { ReactNode, memo, useMemo } from "react";
import Stories from "../components/Stories/Stories";
import Suggested from "../components/Suggested/Suggested";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import { useThemeContext } from "../../../../contexts/theme-context";
import "./PostsMainContent.css";
import '../../../../contexts/theme-style.css'

function PostsMainContent(): ReactNode {
	const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
	
	return (
		<div className= {isDark ? 'MainPostsContainer dark' : 'MainPostsContainer light'}>
			<div className= {isDark ? 'story-and-feed dark' : 'story-and-feed light'}>
				<Stories />
				<PostsContainer />
			</div>
      <Suggested/>
		</div>
	);
}

export default memo(PostsMainContent);
