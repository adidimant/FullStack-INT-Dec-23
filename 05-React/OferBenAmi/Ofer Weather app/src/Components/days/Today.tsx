import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import sunny from '../../assets/sunny.svg';
import cloudy from '../../assets/cloudy.svg';
import rainy from '../../assets/rainy.svg';
import snowy from '../../assets/snowy.svg';
import thunder from '../../assets/thunder.svg';
import defaultWeather from '../../assets/defaultWeather.svg'
import SkeletonDay from "./SkeletonDay";
import { findCorrectIcon } from "../../utils/utils";


function Today () {
	const {fetchedData} = useWeatherContext();
	const {coldMeasuringUnit} = useColdMeasureContext();
	const {distanceMeasureUnit} = useDistanceMeasureContext();

	if(!fetchedData){
		return <SkeletonDay/>
	}
	function handleIcon(){
		//spaghetti code,  diden't find a solution
		const solution = findCorrectIcon(fetchedData?.today?.weatherDesc)
		if(solution == 'sunny') return sunny;
		if(solution == 'cloudy') return cloudy;
		if(solution == 'rainy') return rainy;
		if(solution == 'snowy') return snowy;
		if(solution == 'thunder') return thunder;
		return defaultWeather;
	}



	return (

		<div id="today" className="weatherDay">
			<h3>Today: {fetchedData?.today.date}</h3>
			<div className="">
			<p className="temp">{coldMeasuringUnit == 'Celsius' ? fetchedData?.today.avgtempC : fetchedData?.today.avgtempF}{fetchedData?.today.date ? <>&#176;</> : ''}</p>
			<img className="weather-icon" src={findCorrectIcon(fetchedData?.today?.weatherDesc)} alt="sunny" />
			</div>

		</div>
	);
};
export default memo(Today);
