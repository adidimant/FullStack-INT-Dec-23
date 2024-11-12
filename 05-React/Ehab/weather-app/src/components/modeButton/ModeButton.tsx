import { memo, useCallback, useMemo } from "react";
import { useThemeContext } from "../../contexts/theme-context";
import darkImg from '../../assets/dark.png';
import lightImg from '../../assets/light.png';

function ModeButton() {
    const { theme, dispatch: themeDispatch } = useThemeContext();
    const isDark = useMemo(() => theme === 'dark', [theme]);

    const changeTheme = useCallback(() => {
        if (themeDispatch) {
            themeDispatch(isDark ? 'light' : 'dark');
        }
    }, [isDark, themeDispatch]);


    return (
        <img
            style={{
                zIndex: 3000,
                position: 'fixed',
                top: '5px',
                right: '5px',
                width: '45px',
                height: '45px',
                cursor: 'pointer',
                margin: '5px',
                borderRadius: '50%',
            }} src={isDark ? lightImg : darkImg} onClick={changeTheme}
        />
    );
}

export default memo(ModeButton);
