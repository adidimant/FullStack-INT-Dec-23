import { memo, ReactNode } from "react";
import LeftNavBar from "./component/leftNavBar/LeftNavBar";
import Stories from "./component/stories/Stories";
import Suggested from "./component/suggested/Suggested";
import './PostsPage.css';
import PostMain from "./component/post/PostMain";


function PostsPage(): ReactNode{
    return(
        <>
            <LeftNavBar/>
            <div>
                <Stories/>
                <Suggested/>
            </div>
            <PostMain/>
        </>
    );
}

export default memo(PostsPage);