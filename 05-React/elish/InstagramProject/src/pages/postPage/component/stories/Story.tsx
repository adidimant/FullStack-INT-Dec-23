import { memo } from "react";

function Story({userName, profilePic}:{userName: string ,  profilePic: string}) {
    return(
       <div className="user-story">
            <img src={profilePic} alt="profile" />
            <span className="user-name">{userName}</span>
       </div>
    )
}

export default memo(Story);