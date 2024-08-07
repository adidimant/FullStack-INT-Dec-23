import { ReactNode, memo } from "react";
import LeftNavbar from "../components/LeftNavbar/LeftNavbar";
import MainPostsContainer from './MainPostsContainer/MainPostsContainer';
import './PostsPage.css';


function PostsPage(): ReactNode {
  return (
    <div className="auth-page-container">
      <LeftNavbar />
      <MainPostsContainer/>
    </div>
  );
}

export default memo(PostsPage);
