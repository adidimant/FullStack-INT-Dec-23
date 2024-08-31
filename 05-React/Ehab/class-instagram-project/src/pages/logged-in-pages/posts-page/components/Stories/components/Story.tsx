import { memo, useMemo } from "react";
import { useThemeContext} from "../../../../../../contexts/theme-context";
import '../../../../../../contexts/theme-style.css'

function Story({username,profilePic,}: { username: string;profilePic: string;}) {
	const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
	return (
		<div className= {isDark ? 'user-story dark' : 'user-story light'}>
			<img src={profilePic} alt="storyImg1" />
			<span className={isDark ? 'user-name dark' : 'user-name light'} >{username}</span>
		</div>
	);
}

export default memo(Story);
