import React from "react";
import { ApiResFormatted } from "../../types/types";
import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";

export default function AdvanceToday() {
	const {fetchedData, setFetchedData} = useWeatherContext()
	const { coldMeasuringUnit } = useColdMeasureContext();
	const { distanceMeasureUnit } = useDistanceMeasureContext();

	console.log(fetchedData)
	return (
		<>
		<div className="advance-day">
			<div className="left-div">
				<div className="advanced-item">
					<p>humidity: {fetchedData?.today.humidity}</p>
				</div>
				<div className="advanced-item">
					<p>uv Index: {fetchedData?.today.uvIndex}</p>
				</div>
				<div className="advanced-item">
					<p>wind Speed: {distanceMeasureUnit == 'km'? fetchedData?.today.windspeedKmph : fetchedData?.today.windspeedMiles}</p>
				</div>
			</div>
			<div className="right-div">
			<div className="advanced-item humidity">
					<p>humidity: {fetchedData?.today.humidity}</p>
				</div>
			</div>
        </div>
		</>
	);
}
