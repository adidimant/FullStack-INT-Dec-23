import { ReactNode, memo } from "react";
import MainPostsContainer from './MainPostsContainer/MainPostsContainer';
import './PostsPage.css';
import LeftNavbar from '../../logged-in-pages/components/LeftNavbar/LeftNavbar'


function PostsPage(): ReactNode {
  return (
    <div className="auth-page-container">
      <LeftNavbar />
      <MainPostsContainer />
    </div>
  );
}

export default memo(PostsPage);
