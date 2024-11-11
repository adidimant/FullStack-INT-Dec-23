import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import SkeletonDay from "./SkeletonDay";
import { findCorrectIcon } from "../../utils/utils";

function IntwoDays () {
	const {fetchedData} = useWeatherContext();
	const {coldMeasuringUnit} = useColdMeasureContext();
	const {distanceMeasureUnit} = useDistanceMeasureContext();

	if(!fetchedData){
		return <SkeletonDay/>
	}

	return (
		<div id="today" className="weatherDay">
			<h3>In two days: {fetchedData?.in2Days.date}</h3>
			<p className="temp">{coldMeasuringUnit == 'Celsius' ? fetchedData?.in2Days.avgtempC : fetchedData?.in2Days.avgtempF}{fetchedData?.in2Days.date ? <>&#176;</> : ''}</p>
			<img className="weather-icon" src={findCorrectIcon(fetchedData?.tomorrow?.weatherDesc)} alt="sunny" />
		</div>
	);
};
export default memo(IntwoDays);
