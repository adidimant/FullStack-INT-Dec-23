import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useWeatherContext } from "../../../contexts/Weather-Context";
import './Advanced.css';
import Utils from "../../../Utils/Utils";
import { useUnitContext } from "../../../contexts/Unit-Context";
import { useThemeContext } from "../../../contexts/theme-context";

type AdvancedProps = {
    day: number,
};

function Advanced(day: AdvancedProps): ReactNode{
    const { data } = useWeatherContext();
    const { unit } = useUnitContext();
    const [ seeMore, setSeeMore ] = useState<boolean>(false);
    const { theme }= useThemeContext();
    const divContainer = useRef<HTMLDivElement | null>(null);
    const divLess = useRef<HTMLDivElement | null>(null);
    const divMore = useRef<HTMLDivElement | null>(null);

    const advancedData = useMemo(() => {
        const d: number = day.day;
        const h: number = Utils.getArrayIndexByTime();
        if (!data?.weather?.[d]?.hourly[h]) {
            return []; // Return an empty array if data is not available
        }
        return [
            { 
                uvIndex: data.weather[d].hourly[h].uvIndex ,
                windspeedKmph: data.weather[d].hourly[h].windspeedKmph ,
                windspeedMiles: data.weather[d].hourly[h].windspeedMiles ,
                windDirection: data.weather[d].hourly[h].winddir16Point ,
                windDegree: data.weather[d].hourly[h].winddirDegree ,
                humidity: data.weather[d].hourly[h].humidity ,
                visibility: data.weather[d].hourly[h].visibility ,
                visibilityMiles: data.weather[d].hourly[h].visibilityMiles ,
                HeatIndexC: data.weather[d].hourly[h].HeatIndexC ,
                HeatIndexF: data.weather[d].hourly[h].HeatIndexF ,
                chanceOfFog: data.weather[d].hourly[h].chanceoffog ,
                chanceOfSnow: data.weather[d].hourly[h].chanceofsnow ,
                chanceofwindy: data.weather[d].hourly[h].chanceofwindy ,
                feelsLikeC: data.weather[d].hourly[h].FeelsLikeC ,
                feelsLikeF: data.weather[d].hourly[h].FeelsLikeF ,
                chanceOfRain: data.weather[d].hourly[h].chanceofrain ,
            }
        ];
    }, [data.weather, day.day]);

    useEffect(() => {
        const div_container = document.getElementById('advanced-container') as HTMLDivElement;
        divContainer.current = div_container;

        const div_more = document.getElementById('more') as HTMLDivElement;
        divMore.current = div_more

        const div_less = document.getElementById('less') as HTMLDivElement;
        divLess.current = div_less;
    }, [seeMore]);
    
    

    const handelSeeMore = useCallback(()=>{
        if(divContainer.current && advancedData[0] ){
            divContainer.current.classList.add('mor');
            if(theme === 'dark'){
                if(divContainer.current.classList.contains('mor')){
                    divContainer.current.style.backgroundColor = '#2B3443';
                    if(divMore.current){
                        divMore.current.style.backgroundColor = '#0B121E';
                    }
                }
            }else{
                if(divContainer.current.classList.contains('mor')){
                    divContainer.current.style.backgroundColor = '#a0e0fa';
                    if(divMore.current){
                        divMore.current.style.backgroundColor = '#bbe5f4';
                    }
                }
            }
            setSeeMore(!seeMore);
        }else{
            alert('No data found, please try again');
        } 
    },[advancedData, seeMore, theme]);
    
    const handelSeeLess = useCallback(()=>{
        if(divContainer.current){
            divContainer.current.classList.remove('mor'); 
            if(theme === 'dark'){
                if(!divContainer.current.classList.contains('mor')){
                    divContainer.current.style.backgroundColor = '#0B121E';
                    if(divLess.current){
                        divLess.current.style.backgroundColor = '#2B3443';
                    }
                }
            }else{
                if(!divContainer.current.classList.contains('mor')){
                    divContainer.current.style.backgroundColor = '#bbe5f4';
                    if(divLess.current){
                        divLess.current.style.backgroundColor = '#a0e0fa';
                    }
                }
            }
            setSeeMore(!seeMore);
        }
    },[seeMore, theme]);

    useEffect(()=>{
        if(divContainer.current){
            if(theme === 'dark'){
                if(divContainer.current.classList.contains('mor')){
                    divContainer.current.style.backgroundColor = '#2B3443';
                }
                else{
                    divContainer.current.style.backgroundColor = '#0B121E';
                }
            }else{
                if(divContainer.current.classList.contains('mor')){
                    divContainer.current.style.backgroundColor = '#a0e0fa';
                }else{
                    divContainer.current.style.backgroundColor = '#bbe5f4';
                }
            }
        }
    },[theme]);
    return(
        <div id='advanced-container' className='advanced-container' >
            {seeMore ? (
                <>
                    <div id='less' className='seeMoreOrLess' style={{ background: theme === 'dark' ? '#2B3443' : '#a0e0fa' , color: theme === 'dark' ? '':'black', fontWeight : theme === 'dark' ? '':'bold' }} onClick={handelSeeLess}>See less</div>
                    <div style={{ color: theme === 'light' ? 'black' : '', fontWeight: theme === 'dark' ? '' : 'bold' }}>{`🌧️ Chance of Rain: ${advancedData[0].chanceOfRain}%`}</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ `☀️ UV Index: ${advancedData[0].uvIndex}` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ unit.KMs ? `💨 Wind Speed (km/h): ${advancedData[0].windspeedKmph}` : `💨 Wind Speed (Miles): ${advancedData[0].windspeedMiles}` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ `🧭 Wind Direction: ${advancedData[0].windDirection}` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ `📐 Wind Degree: ${advancedData[0].windDegree}°` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ `💧 Humidity: ${advancedData[0].humidity}%` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ unit.KMs ? `👁️ visibility: ${advancedData[0].visibility} km` : `👁️ visibility: ${advancedData[0].visibilityMiles} Miles`}</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ unit.Celsius ? `🌡️ Heat Index: ${advancedData[0].HeatIndexC}°C` : `🌡️ Heat Index: ${advancedData[0].HeatIndexF}°F` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ `🌫️ Chance of Fog: ${advancedData[0].chanceOfFog}%` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ ` ❄️Chance of Snow: ${advancedData[0].chanceOfSnow}%` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{ `💨 Chance of Windy Conditions: ${advancedData[0].chanceofwindy}%` }</div>
                    <div  style={{ color: theme === 'light' ? 'black' : '', fontWeight : theme === 'dark' ? '':'bold' }}>{unit.Celsius ? `🌡️ Feels Like: ${advancedData[0].feelsLikeC}°C` : `🌡️ Feels Like: ${advancedData[0].feelsLikeF}°F`}</div>
                </>
            ) : (
                <div id='more' className='seeMoreOrLess' style={{ background: theme === 'dark' ? '#2B3443' : '#a0e0fa', color: theme === 'dark' ? '':'black', fontWeight : theme === 'dark' ? '':'bold' }} onClick={handelSeeMore}>See more</div>
            )}
        </div>
    );
}

export default Advanced;