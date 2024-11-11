import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import SkeletonDay from "./SkeletonDay";
import { findCorrectIcon } from "../../utils/utils";

function Tomorrow () {
	const {fetchedData} = useWeatherContext();
	const {coldMeasuringUnit} = useColdMeasureContext();
	const {distanceMeasureUnit} = useDistanceMeasureContext();

	if(!fetchedData){
		return <SkeletonDay/>
	}

	return (

		<div id="today" className="weatherDay">
			<h3>Tomorrow: {fetchedData?.tomorrow.date}</h3>
			<p className="temp">{coldMeasuringUnit == 'Celsius' ? fetchedData?.tomorrow.avgtempC : fetchedData?.tomorrow.avgtempF}{fetchedData?.tomorrow.date ? <>&#176;</> : ''}</p>
			<img className="weather-icon" src={findCorrectIcon(fetchedData?.tomorrow?.weatherDesc)} alt="sunny" />

		</div>
	);
};
export default memo(Tomorrow);
