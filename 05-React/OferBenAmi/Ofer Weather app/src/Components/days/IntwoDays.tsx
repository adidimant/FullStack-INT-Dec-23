import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";

function IntwoDays () {
	const {fetchedData} = useWeatherContext();
	const {coldMeasuringUnit} = useDistanceMeasureContext()

	if(!fetchedData){
		return <div>loading...</div>
	}

	return (
		<div id="today" className="weatherDay">
			<h3>Today: {fetchedData?.in2Days.date}</h3>
			<p>{ fetchedData?.in2Days.avgtempC}</p>
		</div>
	);
};
export default memo(IntwoDays);
