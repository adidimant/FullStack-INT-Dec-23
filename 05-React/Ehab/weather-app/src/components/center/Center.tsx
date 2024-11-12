import { memo, ReactNode, useState, useCallback } from "react";
import Search from "./Search/Search";
import CurrentDay from "./current-day/CurrentDay";
import Todayforecast from "./today_s-forecast/Today_sforecast";
import './Center.css';
import Advanced from "./advanced/Advanced";
import { useWeatherContext } from "../../contexts/Weather-Context";
import { useThemeContext } from "../../contexts/theme-context";

function Center(): ReactNode {
    const [day, setDay] = useState<number>(0);
    const { data } = useWeatherContext();
    const { theme }= useThemeContext();
    const prev = useCallback(() => {
        if (day > 0) {
            setDay(day - 1);
        }
    }, [day]);

    const next = useCallback(() => {
        if (day < 2) {
            setDay(day + 1);
        }
    }, [day]);

    return (
        <div>
            <Search />
            {data?.weather?.[0]?.hourly && <div className={`navigator ${theme}`}>
                <div className={`prev ${theme}-border ${theme}-hover`} onClick={prev}>
                    <div className="text">PREV</div>
                    <div className={`icon ${theme}-border`}>{'<'}</div>
                </div>
                <div className={`next ${theme}-border ${theme}-hover `} onClick={next}>
                    <div className={`icon ${theme}-border`}>{'>'}</div>
                    <div className="text">NEXT</div>
                </div>
            </div>}
            <CurrentDay day={day} />
            <Todayforecast day={day} />
            <Advanced day={day} />
        </div>
    );
}

export default memo(Center);
