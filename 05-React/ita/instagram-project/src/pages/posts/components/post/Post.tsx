import { memo } from "react";
import { ResultType } from '../../types'
import "./Post.css"


function Post({ data }: ResultType) {

    return (
        <div className="post-container">
            <div className="post-header">
                <div className="profileImage">
                    <img src={data.profilImg} />
                </div>
                <div className="text-header-box">
                    <div>{data.username}</div>
                    <div>{data.music}</div>
                </div>
                <div><span className="material-symbols-outlined">more_horiz</span></div>
            </div>
            <div className="post-img">
                ndfgbnb
            </div>
            <div className="icons-container">
                <div className="left-icons-box">
                <span className="material-symbols-outlined icon">favorite</span>
                <span className="material-symbols-outlined icon">chat_bubble</span>
                <span className="material-symbols-outlined icon">send</span>
                </div>
                <div className=" ">
                <span className="material-symbols-outlined icon">bookmark</span>
                </div>
            </div>
        </div>
    )
}

export default memo(Post)