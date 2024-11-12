import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import SkeletonDay from "./SkeletonDay";
import Temp from "../Temp";
import Hourlydiv from "../Hours/Hourlydiv";
import Wind from "../Wind";

function IntwoDays () {
	const {fetchedData} = useWeatherContext();

	if(!fetchedData){
		return <SkeletonDay/>
	}

	return (
		<>
		<div id="today" className="weatherDay">
			<h3>In two days: {fetchedData?.in2Days.date}</h3>
			<Temp avgtempC={fetchedData?.in2Days.avgtempC} avgtempF={fetchedData?.in2Days.avgtempF} date={fetchedData?.in2Days.date} weatherDesc={fetchedData?.in2Days.weatherDesc}/>
			<Wind
					windspeedKmph={fetchedData?.in2Days.windspeedKmph}
					windspeedMiles={fetchedData?.in2Days.windspeedMiles}
				/>
		</div>
		<Hourlydiv hourlyData={fetchedData.in2Days.hourly}/>
		</>
	);
};
export default memo(IntwoDays);
