

import "./Timeline.css";
import Sugesstions from "./Sugesstions";
import PostsPage from "./Posts/PostPage";

export default function Timeline() {
    return (
        <div className='timeline'>
            <div className="timeline__posts">
                <PostsPage />
            </div>
            <div className="timeline__sugesstions">
                <Sugesstions />
            </div>
        </div>
    );
}