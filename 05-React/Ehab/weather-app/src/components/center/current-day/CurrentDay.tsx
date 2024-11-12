import { memo, ReactNode, useEffect, useState } from "react";
import { useWeatherContext } from "../../../contexts/Weather-Context";
import './CurrentDay.css';
import Utils from "../../../Utils/Utils";
import hot from '../../../assets/hot.png';
import extrahot from '../../../assets/extrahot.png';
import rainning from '../../../assets/rainning.png';
import snow from '../../../assets/snow.png';
import cloudyClipartWeather from '../../../assets/cloudyClipartWeather.png'
import { useUnitContext } from "../../../contexts/Unit-Context";
import { useThemeContext } from "../../../contexts/theme-context";


type currentDayProps = {
    day: number,
};
type onScreenData = {
    area: string,
    chanceofrain: string,
    tempC: string,
    tempF: string,
    weatherDesc: string,
    date: string,
};

function CurrentDay(day: currentDayProps): ReactNode{
    const { data } = useWeatherContext();
    const { unit } = useUnitContext();
    const [ onScreenData, setOnScreenData ] = useState<onScreenData | undefined>(undefined);
    const [ imageName, setImageName ] = useState<string | null>(null);
    const { theme }= useThemeContext();
    
    useEffect(()=>{
        if(data && data.current_condition && data.nearest_area && data.weather && day){
            const area: string = (data.nearest_area[0]?.areaName as unknown as { value: string }[])?.[0]?.value;
            const chanceofrain: string = data.weather[day.day].hourly[0].chanceofrain;
            const tempC: string = data.weather[day.day].hourly[0].tempC;
            const tempF: string = data.weather[day.day].hourly[0].tempF;
            const weatherDesc: string = (data.current_condition[0]?.weatherDesc as unknown as { value: string }[])?.[0]?.value;
            const dateParts: Array<string>  =(data.weather[day.day].date).split('-')
            const date: string = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            
            setOnScreenData({
                area,
                chanceofrain,
                tempC,
                tempF,
                weatherDesc,
                date,
            });
        }
    },[data, day]);

    useEffect(()=>{
        if(unit.Celsius && onScreenData?.tempC){
            setImageName(Utils.getIconName(parseInt(onScreenData?.tempC),undefined,parseInt(onScreenData.chanceofrain)));
        }
        if(unit.Fahrenheit && onScreenData?.tempF){
            setImageName(Utils.getIconName(undefined,parseInt(onScreenData?.tempF),parseInt(onScreenData.chanceofrain)));
        }
    },[onScreenData?.chanceofrain, onScreenData?.tempC, onScreenData?.tempF, unit.Celsius, unit.Fahrenheit]);

    if (!onScreenData) {
        return(
            <div></div>
        );
    }
    return(
        <div className={`currentDay-container ${theme}`}>
            <div className="box">
                <h2 className="date">{onScreenData?.date}</h2>
                <h1>{onScreenData?.area}</h1>
                <h3>Chance to rain: {onScreenData?.chanceofrain}%, {onScreenData?.weatherDesc}</h3>
                <div className="tempCDiv">
                    {unit.Celsius ? <span id='tempC'>{onScreenData?.tempC}°C </span> : <span id='tempC'>{onScreenData?.tempF}°F </span>}
                </div>
            </div>
            <div className="box">
            {
                imageName === 'extrahot' ? (
                    <img src={extrahot} alt= 'Weather Icon' />
                ) : imageName === 'hot' ? (
                    <img src={hot} alt= 'Weather Icon' />
                ) : imageName === 'snow' ? (
                    <img src={snow} alt= 'Weather Icon' />
                ): imageName === 'cloudyClipartWeather' ? (
                    <img src={cloudyClipartWeather} alt= 'Weather Icon' />
                ): (
                    <img src={rainning} alt= 'Weather Icon' />
                )
            }
            </div>
        </div>

    );
}

export default memo(CurrentDay);