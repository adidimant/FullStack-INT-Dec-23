import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import SkeletonDay from "./SkeletonDay";
import { findCorrectIcon } from "../../utils/utils";
import Wind from "../Wind";
import Temp from "../Temp";
import Hourlydiv from "../Hours/Hourlydiv";

function Tomorrow() {
	const { fetchedData } = useWeatherContext();

	if (!fetchedData) {
		return <SkeletonDay />;
	}

	return (
		<>
		<div id="today" className="weatherDay">
			<h3>Tomorrow: {fetchedData?.tomorrow.date}</h3>
			<Temp avgtempC={fetchedData?.tomorrow.avgtempC} avgtempF={fetchedData?.tomorrow.avgtempF} date={fetchedData?.tomorrow.date} weatherDesc={fetchedData?.tomorrow.weatherDesc}/>
			<Wind
					windspeedKmph={fetchedData?.tomorrow.windspeedKmph}
					windspeedMiles={fetchedData?.tomorrow.windspeedMiles}
				/>
		</div>
		<Hourlydiv hourlyData={fetchedData.tomorrow.hourly}/>

		</>
	);
}
export default memo(Tomorrow);
