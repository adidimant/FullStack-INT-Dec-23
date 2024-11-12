import { ReactNode, useMemo } from "react";
import Day from "./components/Hour";
import { useWeatherContext } from "../../../contexts/Weather-Context";
import { useUnitContext } from "../../../contexts/Unit-Context";
import "./Today_sforecast.css";
import { useThemeContext } from "../../../contexts/theme-context";

type TodayforecastProps = {
    day: number,
};


function Todayforecast(day: TodayforecastProps): ReactNode{
    const { data } = useWeatherContext();
    const { unit } = useUnitContext();
    const { theme }= useThemeContext();
    const dayData = useMemo(() => {
        if (!data?.weather?.[0]?.hourly) {
            return []; // Return an empty array if data is not available
        }
        return [
            {time: data.weather[day.day].hourly[0].time, tempc: data.weather[day.day].hourly[0].tempC, tempf: data.weather[day.day].hourly[0].tempF, chanceofrain: data.weather[day.day].hourly[0].chanceofrain},
            {time: data.weather[day.day].hourly[1].time, tempc: data.weather[day.day].hourly[1].tempC, tempf: data.weather[day.day].hourly[1].tempF, chanceofrain: data.weather[day.day].hourly[1].chanceofrain},
            {time: data.weather[day.day].hourly[2].time, tempc: data.weather[day.day].hourly[2].tempC, tempf: data.weather[day.day].hourly[2].tempF, chanceofrain: data.weather[day.day].hourly[2].chanceofrain},
            {time: data.weather[day.day].hourly[3].time, tempc: data.weather[day.day].hourly[3].tempC, tempf: data.weather[day.day].hourly[3].tempF, chanceofrain: data.weather[day.day].hourly[3].chanceofrain},
            {time: data.weather[day.day].hourly[4].time, tempc: data.weather[day.day].hourly[4].tempC, tempf: data.weather[day.day].hourly[4].tempF, chanceofrain: data.weather[day.day].hourly[4].chanceofrain},
            {time: data.weather[day.day].hourly[5].time, tempc: data.weather[day.day].hourly[5].tempC, tempf: data.weather[day.day].hourly[5].tempF, chanceofrain: data.weather[day.day].hourly[5].chanceofrain},
            {time: data.weather[day.day].hourly[6].time, tempc: data.weather[day.day].hourly[6].tempC, tempf: data.weather[day.day].hourly[6].tempF, chanceofrain: data.weather[day.day].hourly[6].chanceofrain},
            {time: data.weather[day.day].hourly[7].time, tempc: data.weather[day.day].hourly[7].tempC, tempf: data.weather[day.day].hourly[7].tempF, chanceofrain: data.weather[day.day].hourly[7].chanceofrain},
        ];
    }, [data.weather, day]);
    
    return(
        <div className={`TodayforecastContainer ${theme}`}>
            <h2 className={`${theme}`}>Hourly Weather</h2>
            <div className="DayRow">
                {dayData.map((data, index) => (
                    <div key={index} className={`DayWrapper ${theme} ${index === 7 ? 'LastColumn': ''}`}>
                        {unit.Celsius ? 
                            <Day time={data.time} tempC={data.tempc} chanceofrain={data.chanceofrain} /> :
                            <Day time={data.time} tempF={data.tempf} chanceofrain={data.chanceofrain} />
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todayforecast;