import { memo } from "react";
import { Link } from "react-router-dom";
import './MoreOptions.css'


type PostUser = {
    user: string;
};

function MoreOptions({ user }: PostUser){
    //const stateData = { user, postImage, likes, timestamp };
    //console.log(stateData);
    return(
        <div className="moreoptions-container">
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