import { ReactNode, memo } from "react";
import LeftNavbar from "../components/post-auth-page-navbar/LeftNavbar";
import MainPostComp from "./MainPostComp/MainPostComp";
import './Posts.css';


function Posts(): ReactNode {
  return (
    <div className="auth-page-container">
      <LeftNavbar />
      <MainPostComp/>
    </div>
  );
}

export default memo(Posts);
