import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import SkeletonDay from "./SkeletonDay";

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
		</div>
	);
};
export default memo(Tomorrow);
