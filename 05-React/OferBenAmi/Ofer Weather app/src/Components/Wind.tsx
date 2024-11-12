import React from "react";
import wind from '../assets/wind.svg'
import { useDistanceMeasureContext } from "../Context/DistanceUnit";

export default function Wind({windspeedKmph,windspeedMiles}: {windspeedKmph: string|undefined, windspeedMiles: undefined| string}) {
    const { distanceMeasureUnit } = useDistanceMeasureContext();

	function milesOrKm(){
		return (distanceMeasureUnit =='km' ? windspeedKmph : windspeedMiles)
	}
	return (
		<div className="wind">
			<p className="temp">{distanceMeasureUnit =='km' ? windspeedKmph : windspeedMiles} <span>{distanceMeasureUnit == 'km' ? 'KM': 'MILE'}/H </span></p>
			<img src={wind} alt="wind" />
		</div>
	);
}
