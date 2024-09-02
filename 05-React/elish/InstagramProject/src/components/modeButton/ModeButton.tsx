import { memo, useCallback } from 'react';
import {useThemeContext} from '../../contexts/theme-context';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import './ModeButton.css';

function ModeButton(){
    const {theme, dispatch} = useThemeContext();

    const toggleTheme = useCallback(()=>{
        if(dispatch)
            dispatch(theme == 'light' ? 'dark' : 'light');
    }, [theme, dispatch]);

    return(
        <button className='mode-button' onClick={toggleTheme}>{theme == 'light' ? <NightlightIcon/> : <LightModeIcon/> }</button>
    );
}

export default memo(ModeButton);