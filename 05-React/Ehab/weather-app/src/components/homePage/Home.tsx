import { memo, ReactNode } from "react";
import Left from "../left/Left";
import Center from "../center/Center";
import ThreeDayForecast from "../right/ThreeDayForecast";
import { WeatherProvider } from "../../contexts/Weather-Context";
import { UnitProvider } from "../../contexts/Unit-Context";
import ModeButton from "../modeButton/ModeButton";
import './Home.css'
import { useThemeContext } from "../../contexts/theme-context";

function Home(): ReactNode {
    const { theme }= useThemeContext();
    return(
        
        <div className={`background ${theme}-background`}>
            <div className={`middle ${theme}-middle`}>
                <WeatherProvider>
                <UnitProvider>
                <ModeButton />
                <div className={`left ${theme}-left`}><Left /></div>
                <div className={`center ${theme}-center`}><Center /></div>
                <div className={`right ${theme}-right`}><ThreeDayForecast /></div>
                </UnitProvider>
                </WeatherProvider>
            </div>
        </div>    
    );
}

export default memo(Home);