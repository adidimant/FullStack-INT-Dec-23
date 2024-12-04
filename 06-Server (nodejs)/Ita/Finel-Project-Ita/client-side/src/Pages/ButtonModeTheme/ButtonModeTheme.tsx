import { memo, useCallback, useMemo } from "react";
import { useThemeContext } from "../../context/theme-context";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness5Icon from '@mui/icons-material/Brightness5';

function ButtomModeTheme() {
    const { theme, dispatch: themeDispatch } = useThemeContext(); 
    const isDark = useMemo(() => theme === 'dark', [theme]);

    const changeTheme = useCallback(() => {
        if (themeDispatch) {
            themeDispatch(isDark ? 'light' : 'dark');
        }
    }, [isDark, themeDispatch]);

    return (
        <div className="bthTheme" style={{fontSize: "75px"}} onClick={changeTheme}>{isDark ? <Brightness5Icon/> : <BedtimeIcon/>}</div>
    )
}

export default memo(ButtomModeTheme)