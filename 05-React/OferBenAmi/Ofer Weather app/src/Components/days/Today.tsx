import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import SkeletonDay from "./SkeletonDay";
import { findCorrectIcon } from "../../utils/utils";


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
			<div className="">
			<p className="temp">{coldMeasuringUnit == 'Celsius' ? fetchedData?.today.avgtempC : fetchedData?.today.avgtempF}{fetchedData?.today.date ? <>&#176;</> : ''}</p>
			<img className="weather-icon" src={findCorrectIcon(fetchedData?.today?.weatherDesc)} alt="sunny" />
			</div>

		</div>
	);
};
export default memo(Today);
