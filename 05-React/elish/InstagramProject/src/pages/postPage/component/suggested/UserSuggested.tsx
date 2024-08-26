import { memo, ReactNode } from "react"

function UserSuggested({profilePic, userName, fullName,switchOrFllow}: {profilePic: string, userName: string, fullName: string, switchOrFllow: string}): ReactNode{
    return(
        <div className="user-suggested">
            <div className="user-suggested-details">
                <img src={profilePic} alt="profile" />
                <div>
                    <p className="userName">{userName}</p>
                    <p className="fullName">{fullName}</p>
                </div>
            </div>
            <button className="switch-user">{switchOrFllow}</button>
        </div>
    );
}

export default memo(UserSuggested);