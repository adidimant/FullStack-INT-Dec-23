import { memo } from "react"


function UserSuggested({profilePic, userName, fullName, switchOrFllow}:{profilePic:string, userName:string,fullName:string,switchOrFllow:string}){
    return(
        <div className="user-suggested">
				<div className="user-suggested-details">
					<img src={profilePic} alt="profilePic" />
					<div>
						<p className="username">{userName}</p>
						<p className="fullName">{fullName}</p>
					</div>
				</div>
				<button className="switch-user" style={{backgroundColor: 'transparent'}}>{switchOrFllow}</button>
			</div>
    )
}

export default memo(UserSuggested)
