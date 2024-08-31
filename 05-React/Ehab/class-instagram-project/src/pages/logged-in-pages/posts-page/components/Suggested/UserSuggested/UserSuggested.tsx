import { memo, useMemo } from "react"
import { useThemeContext } from "../../../../../../contexts/theme-context"
import '../../../../../../contexts/theme-style.css'

function UserSuggested({profilePic, userName, fullName, switchOrFllow}:{profilePic:string, userName:string,fullName:string,switchOrFllow:string}){
	const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
    return(
        <div className={isDark ? 'user-suggested dark' : 'user-suggested light'}>
				<div className= {isDark ? 'user-suggested-details dark' : 'user-suggested-details light'}>
					<img src={profilePic} alt="profilePic" />
					<div>
						<p className= {isDark ? 'username dark' : 'username light'}>{userName}</p>
						<p className= {isDark ? 'fullName dark' : 'fullName light'}>{fullName}</p>
					</div>
				</div>
				<button className= {isDark ? 'switch-user dark' : 'switch-user light'}>{switchOrFllow}</button>
			</div>
    )
}

export default memo(UserSuggested)
