import { memo } from "react"
import { useThemeContext } from "../../../../../../contexts/theme-context"


function UserSuggested({profilePic, userName, fullName, switchOrFllow}:{profilePic:string, userName:string,fullName:string,switchOrFllow:string}){
	const { theme }= useThemeContext()
	return(
        <div className="user-suggested">
				<div className="user-suggested-details">
					<img src={profilePic} alt="profilePic" />
					<div>
						<p className="username">{userName}</p>
						<p className="fullName">{fullName}</p>
					</div>
				</div>
				<button className="switch-user" style={{backgroundColor: theme === 'dark' ? '#181818':undefined}}>{switchOrFllow}</button>
			</div>
    )
}

export default memo(UserSuggested)
