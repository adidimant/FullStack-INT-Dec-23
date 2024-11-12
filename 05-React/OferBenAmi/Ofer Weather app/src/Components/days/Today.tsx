import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";
import SkeletonDay from "./SkeletonDay";
import Temp from "../Temp";
import Wind from "../Wind";
import Hourlydiv from "../Hours/Hourlydiv";

function Today() {
	const { fetchedData } = useWeatherContext();

	if (!fetchedData) {
		return <SkeletonDay />;
	}


	return (
		<>
			<div id="today" className="weatherDay">
				<h3>Today: {fetchedData?.today.date}</h3>
				<Temp
					avgtempC={fetchedData?.today.avgtempC}
					avgtempF={fetchedData?.today.avgtempF}
					date={fetchedData?.today.date}
					weatherDesc={fetchedData?.today.weatherDesc}
				/>
				<Wind
					windspeedKmph={fetchedData?.today.windspeedKmph}
					windspeedMiles={fetchedData?.today.windspeedMiles}
				/>
			</div>
			<Hourlydiv hourlyData={fetchedData.today.hourly}/>
		</>
	);
}
export default memo(Today);
