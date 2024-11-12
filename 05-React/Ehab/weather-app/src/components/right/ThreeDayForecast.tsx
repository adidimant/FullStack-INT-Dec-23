import { memo, ReactNode, useEffect, useMemo, useState } from "react";
import './ThreeDayForecast.css';
import Utils from "../../Utils/Utils";
import { useWeatherContext } from "../../contexts/Weather-Context";
import hot from '../../assets/hot.png';
import extrahot from '../../assets/extrahot.png';
import rainning from '../../assets/rainning.png';
import snow from '../../assets/snow.png';
import cloudyClipartWeather from '../../assets/cloudyClipartWeather.png'
import { useUnitContext } from "../../contexts/Unit-Context";
import { useThemeContext } from "../../contexts/theme-context";

type onScreenData = {
    avgtempC1: string,
    avgtempC2: string,
    avgtempC3: string,
    avgtempF1: string,
    avgtempF2: string,
    avgtempF3: string,
    weatherDesc1: string,
    weatherDesc2: string,
    weatherDesc3: string,
    maxtempC1: string,
    maxtempC2: string,
    maxtempC3: string,
    maxtempF1: string,
    maxtempF2: string,
    maxtempF3: string,
    mintempC1: string,
    mintempC2: string,
    mintempC3: string,
    mintempF1: string,
    mintempF2: string,
    mintempF3: string,
};
const images: { [key: string]: string } = {
    hot,
    extrahot,
    rainning,
    snow,
    cloudyClipartWeather
};

function ThreeDayForecast(): ReactNode{
    const { data } = useWeatherContext();
    const { unit } = useUnitContext();
    const { theme }= useThemeContext();
    const threeDays = useMemo<Array<string>>(() =>{ return Utils.getNextThreeDaysName(); },[]);
    const [ onScreenData, setOnScreenData ] = useState<onScreenData | undefined>(undefined);
    const timeIndex: number = useMemo(() => Utils.getArrayIndexByTime(), []);
    const [ imageName1,setImageName1 ] = useState<string>('');
    const [ imageName2,setImageName2 ] = useState<string>('');
    const [ imageName3,setImageName3 ] = useState<string>('');

    

    useEffect(()=>{
        if(data.weather){
            const avgtempC1: string = data.weather[0].avgtempC;
            const avgtempC2: string = data.weather[1].avgtempC;
            const avgtempC3: string = data.weather[2].avgtempC;

            const avgtempF1: string = data.weather[0].avgtempF;
            const avgtempF2: string = data.weather[1].avgtempF;
            const avgtempF3: string = data.weather[2].avgtempF;

            const weatherDesc1: string = (data.weather[0]?.hourly[timeIndex].weatherDesc as unknown as { value: string }[])?.[0]?.value;
            const weatherDesc2: string = (data.weather[1]?.hourly[timeIndex].weatherDesc as unknown as { value: string }[])?.[0]?.value;
            const weatherDesc3: string = (data.weather[2]?.hourly[timeIndex].weatherDesc as unknown as { value: string }[])?.[0]?.value;
            
            const maxtempC1: string = data.weather[0].maxtempC;
            const maxtempC2: string = data.weather[1].maxtempC;
            const maxtempC3: string = data.weather[2].maxtempC;

            const maxtempF1: string = data.weather[0].maxtempF;
            const maxtempF2: string = data.weather[1].maxtempF;
            const maxtempF3: string = data.weather[2].maxtempF;

            const mintempC1: string = data.weather[0].mintempC;
            const mintempC2: string = data.weather[1].mintempC;
            const mintempC3: string = data.weather[2].mintempC;

            const mintempF1: string = data.weather[0].mintempF;
            const mintempF2: string = data.weather[1].mintempF;
            const mintempF3: string = data.weather[2].mintempF;

            setOnScreenData({
                avgtempC1,
                avgtempC2,
                avgtempC3,
                avgtempF1,
                avgtempF2,
                avgtempF3,
                weatherDesc1,
                weatherDesc2,
                weatherDesc3,
                maxtempC1,
                maxtempC2,
                maxtempC3,
                maxtempF1,
                maxtempF2,
                maxtempF3,
                mintempC1,
                mintempC2,
                mintempC3,
                mintempF1,
                mintempF2,
                mintempF3,
            });
        }
    },[data, timeIndex]);

    useEffect(()=>{
        if (onScreenData) {
            setImageName1(Utils.getIconName(parseInt(onScreenData.avgtempC1)) || '');
            setImageName2(Utils.getIconName(parseInt(onScreenData.avgtempC2)) || '');
            setImageName3(Utils.getIconName(parseInt(onScreenData.avgtempC3)) || '');
        }
    },[onScreenData]);

    if (!onScreenData) {
        return (
            <div className="ThreeDayForecast-container">
                <h2 className="title">3-DAY FORECAST</h2>
            </div>
        );
    }

    return(
        <div className="ThreeDayForecast-container" style={{color : theme === 'dark' ? 'grey':'black', fontWeight : theme === 'dark' ? '':'bold'}}>
            <h2 className="title">3-DAY FORECAST</h2>
            <div className="ThreeDayForecast-row">
                <div>{threeDays[0]}</div>
                <div><img src={images[imageName1]} alt="Weather Icon" /></div>
                <div>{ unit.Celsius ? `${onScreenData?.maxtempC1} / ${onScreenData?.mintempC1}` : `${onScreenData?.maxtempF1} / ${onScreenData?.mintempF1}`}</div>
            </div>
            <div className="ThreeDayForecast-row">
                <div>{threeDays[1]}</div>
                <div><img src={images[imageName2]} alt="Weather Icon" /></div>
                <div>{ unit.Celsius ? `${onScreenData?.maxtempC2} / ${onScreenData?.mintempC2}` : `${onScreenData?.maxtempF2} / ${onScreenData?.mintempF2}`}</div>
            </div>
            <div className="ThreeDayForecast-row">
                <div>{threeDays[2]}</div>
                <div><img src={images[imageName3]} alt="Weather Icon" /></div>
                <div>{ unit.Celsius ? `${onScreenData?.maxtempC3} / ${onScreenData?.mintempC3}` : `${onScreenData?.maxtempF3} / ${onScreenData?.mintempF3}`}</div>
            </div>
        </div>
    );
}

export default memo(ThreeDayForecast);