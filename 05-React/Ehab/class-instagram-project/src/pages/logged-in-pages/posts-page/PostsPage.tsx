import { ReactNode, memo } from "react";
import LeftNavbar from "../components/LeftNavbar/LeftNavbar";
import PostsMainContent from './PostsMainContent/PostsMainContent';
import './PostsPage.css';


function PostsPage(): ReactNode {
  return (
    <div className="auth-page-container">
      <LeftNavbar />
      <PostsMainContent/>
    </div>
  );
}

export default memo(PostsPage);
