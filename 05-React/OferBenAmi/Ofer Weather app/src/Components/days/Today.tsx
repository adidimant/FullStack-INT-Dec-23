import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";

function Today () {
	const {fetchedData, setFetchedData} = useWeatherContext()

	if(!fetchedData){
		return <div>loading...</div>
	}

	return (
		<div id="today" className="weatherDay">
			<h3>Today: {fetchedData?.today.date}</h3>
			<p>{fetchedData?.today.avgtempC}</p>
		</div>
	);
};
export default memo(Today);
