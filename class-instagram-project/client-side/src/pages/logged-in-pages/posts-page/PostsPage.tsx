import { ReactNode, memo } from "react";
import LeftNavbar from "../components/LeftNavbar/LeftNavbar";
import PostsMainContent from './PostsMainContent/PostsMainContent';
import { useThemeContext } from "../../../contexts/theme-context";
import './PostsPage.css';
import '../../../light-dark.css'

function PostsPage(): ReactNode {
  const { theme }= useThemeContext()
  return (
    <div className={`auth-page-container ${theme}-background`}>
      <LeftNavbar />
      <PostsMainContent/>
    </div>
  );
}

export default memo(PostsPage);
