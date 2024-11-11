import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import SkeletonDay from "./SkeletonDay";

function Today () {
	const {fetchedData} = useWeatherContext();
	const {coldMeasuringUnit} = useColdMeasureContext();
	const {distanceMeasureUnit} = useDistanceMeasureContext();

	if(!fetchedData){
		return <SkeletonDay/>
	}

	return (

		<div id="today" className="weatherDay">
			<h3>Today: {fetchedData?.today.date}</h3>
			<p className="temp">{coldMeasuringUnit == 'Celsius' ? fetchedData?.today.avgtempC : fetchedData?.today.avgtempF}{fetchedData?.today.date ? <>&#176;</> : ''}</p>
		</div>
	);
};
export default memo(Today);
