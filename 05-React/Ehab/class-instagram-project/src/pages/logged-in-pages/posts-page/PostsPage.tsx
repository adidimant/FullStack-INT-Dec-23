import { ReactNode, memo } from "react";
import LeftNavbar from "../components/LeftNavbar/LeftNavbar";
import PostsMainContent from './PostsMainContent/PostsMainContent';
import './PostsPage.css';
import { RefreshProvider } from "../../../contexts/refresh-context";


function PostsPage(): ReactNode {
  return (
    <div className="auth-page-container">
      <RefreshProvider>
        <LeftNavbar />
        <PostsMainContent/>
      </RefreshProvider>
    </div>
  );
}

export default memo(PostsPage);