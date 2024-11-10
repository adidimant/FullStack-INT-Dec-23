import { memo } from "react";
import { useWeatherContext } from "../../Context/WeatherContext";

function Tomorrow () {
	const {fetchedData} = useWeatherContext()

	if(!fetchedData){
		return <div>loading...</div>
	}

	return (
		<div id="today" className="weatherDay">
			<h3>Today: {fetchedData?.tomorrow.date}</h3>
			<p>{fetchedData?.tomorrow.avgtempC}</p>
		</div>
	);
};
export default memo(Tomorrow);
