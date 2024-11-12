import { memo, ReactNode, useEffect, useState } from "react";
import Utils from "../../../../Utils/Utils";
import hot from '../../../../assets/hot.png';
import extrahot from '../../../../assets/extrahot.png';
import rainning from '../../../../assets/rainning.png';
import snow from '../../../../assets/snow.png';
import cloudyClipartWeather from '../../../../assets/cloudyClipartWeather.png'
import './Hour.css';
import { useThemeContext } from "../../../../contexts/theme-context";


interface HourProps {
    time: string;
    tempC?: string;
    tempF?: string;
    chanceofrain?: string;
}

function Hour({ time, tempC, tempF, chanceofrain }: HourProps): ReactNode {
    const [imageName, setImageName] = useState<string>('');
    const { theme }= useThemeContext();

    useEffect(()=>{
        if(tempC && chanceofrain){
            const img: string | null = Utils.getIconName(parseInt(tempC),undefined,parseInt(chanceofrain));
            if(img){
                setImageName(img);
            }
        }
        else if(tempF && chanceofrain){
            const img: string | null = Utils.getIconName(undefined,parseInt(tempF),parseInt(chanceofrain));
            if(img){
                setImageName(img);
            }
        }
    },[chanceofrain, tempC, tempF]);
    return (
        <div className="hour-container">
          <div className={`time ${theme}`}>{Utils.getTime(time)}</div>
          <div className="icon">
            {
                imageName === 'extrahot' ? (
                    <img src={extrahot} alt= 'Weather Icon' />
                ) : imageName === 'hot' ? (
                    <img src={hot} alt= 'Weather Icon' />
                ) : imageName === 'snow' ? (
                    <img src={snow} alt= 'Weather Icon' />
                ): imageName === 'cloudyClipartWeather' ? (
                    <img src={cloudyClipartWeather} alt= 'cloudyClipartWeather' />
                ): (
                    <img src={rainning} alt= 'Weather Icon' />
                )
            }
          </div>
          <div className={`temperature ${theme}`}>{tempC ? `${tempC}°C` : `${tempF}°F`}</div>
          <div className={`time ${theme}`}>{`🌧️  ${chanceofrain}%`} </div>
        </div>
    );
}

export default memo(Hour);