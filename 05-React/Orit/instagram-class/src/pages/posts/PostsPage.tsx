import { ReactNode, memo } from "react";
import Navbar from "./components/navbar/Navbar";
import MainBody from "./components/mainBody/MainBody";
import './PostsPage.css';

function PostsPage(): ReactNode {
  return (
    <div className="posts-page-container">
      <Navbar/>
      <MainBody/>
  </div>
  );
}

export default memo(PostsPage);