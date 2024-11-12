import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import './MoreOptions.css'
import axios from "axios";


type PostUser = {
    user: string;
    postImage: string;
};

function MoreOptions({ user, postImage }: PostUser){
    const imgUrl = new URL(postImage).pathname;
    
    const deletePost = useCallback(async ()=>{
        console.log(imgUrl);
        try {
            const response = await axios.delete(`http://localhost:3000/api/posts/delete?imgUrl=${imgUrl}`);
            alert(response.data.message + ' | Post deleted successfully');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    },[imgUrl]);

    return(
        <div className="moreoptions-container">
            <div className="option redOption" onClick={deletePost}>Delete Post</div>
            <div className="option redOption">Report</div>
            <div className="option redOption">Unfollow</div>
            <div className="option">Add to favorites</div>
            <div className="option">
                <Link to={`/post/${user}`}>Go to Post</Link>
            </div>
            <div className="option">Share to...</div>
            <div className="option">Copy link</div>
            <div className="option">Embed</div>
            <div className="option">About this account</div>
            <div className="option lastOption">Cancel</div>
        </div>
    );
}

export default memo (MoreOptions);