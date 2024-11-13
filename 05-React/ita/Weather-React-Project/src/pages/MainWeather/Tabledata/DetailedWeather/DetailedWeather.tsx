import TableData from "../TableData";
import { useWeatherContext } from "../../../../context/data-weather-context";
import { memo, useMemo } from "react";
import { useTempContext } from "../../../../context/temp-context";
import AirIcon from '@mui/icons-material/Air'; //רוח
import ThermostatIcon from '@mui/icons-material/Thermostat';//מד טמפרטורה
import AcUnitIcon from '@mui/icons-material/AcUnit';//שלג
import CloudIcon from '@mui/icons-material/Cloud';//ענן
import BedtimeIcon from '@mui/icons-material/Bedtime';//ירח
import WaterDropIcon from '@mui/icons-material/WaterDrop';//טיפה
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';//עין
import FlareIcon from '@mui/icons-material/Flare'; //קרינה
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import sunset from "../../../../assets/WeatherIcon/sunset.png"
import sunrise from "../../../../assets/WeatherIcon/sunrise.png"
import "./DetailedWeather.css";
import { OrbitProgress } from "react-loading-indicators";

function DetailedWeather() {
    const { weatherData } = useWeatherContext();
    const { temp } = useTempContext();

    if (!weatherData) {
        return <OrbitProgress color="#053e51" size="medium" text="" textColor="" />;
    }

    const dayData = weatherData.weather[0];
    const currentCondition = weatherData.current_condition[0];

    return (
        <TableData title={`Additional data in ${weatherData?.nearest_area?.[0]?.areaName?.[0]?.value || 'Unknown City'} - ${dayData.date}`}>
            <div className="tableBox">
                <div className="tableLeft"> 
                <table className="table1">
                <tbody>
                    <tr>
                        <td><ThermostatIcon /></td> 
                        <td>Temperature</td>
                        <td>{`${dayData[`mintemp${temp}`]}`}°/{`${dayData[`maxtemp${temp}`]}`}°</td>
                    </tr>
                    <tr>
                        <td><WaterDropIcon /></td>
                        <td>Humidity</td>
                        <td>{currentCondition.humidity}%</td>
                    </tr>
                    <tr>
                        <td><UmbrellaIcon /></td>
                        <td>Chance of Rain</td>
                        <td>{dayData.hourly[0].chanceofrain}%</td>
                    </tr>
                    <tr>
                        <td><AcUnitIcon /></td>
                        <td>Chance of Snow</td>
                        <td>{dayData.hourly[0].chanceofsnow}%</td>
                    </tr>
                </tbody>
            </table>
                </div>
                <div className="tableRight">
                <table className="table1">
                <tbody>
                    <tr>
                        <td><CloudIcon /></td>
                        <td>Cloud Cover</td>
                        <td>{currentCondition.cloudcover}%</td>
                    </tr>
                    <tr>
                        <td><AirIcon /></td>
                        <td>Wind Speed</td>
                        <td>{currentCondition.windspeedKmph} km/h</td>
                    </tr>
                    <tr>
                        <td><RemoveRedEyeIcon /></td>
                        <td>Visibility</td>
                        <td>{currentCondition.visibility} km</td>
                    </tr>
                    <tr>
                        <td><FlareIcon /></td>
                        <td>UV Index</td>
                        <td>{dayData.uvIndex}</td>
                    </tr>
                    <tr>
                        <td><BedtimeIcon /></td>
                        <td>Moon show</td>
                        <td>{dayData.astronomy[0]?.moon_phase}</td>
                    </tr>
                </tbody>
            </table>
                </div>
            </div>

            <div className="times">
                <div className="title2">Sunrise and Sunset Times</div>
                <div className="timesContainer">
                    <div className="timeItem">
                        <img src={sunrise} alt="sunrise" />
                        <div>{dayData.astronomy[0]?.sunrise}</div>
                    </div>
                    <div className="timeItem">
                        <img src={sunset} alt="sunset" />
                        <div>{dayData.astronomy[0]?.sunset}</div>
                    </div>
                </div>
            </div>

           
            
        </TableData>
    );
}

export default memo(DetailedWeather);
