import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../contexts/theme-context";
import "./LittleLink.css";
import '../../contexts/theme-style.css'

type LittleLinkProps = { text: string; to: string };

function LittleLink({ text, to }: LittleLinkProps): JSX.Element {
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
  const customStyle = useMemo(()=>{
    return ({
      backgroundColor: isDark ? '#000000':'#ffffff',
      color: isDark ? '#ffffff':'#385185'
    })
  },[isDark])

    return (
      <Link className={isDark ? 'LittleLink dark' : 'LittleLink light'} to={to}><span style={customStyle}>{text}</span></Link>
    )
  }

export default memo(LittleLink);