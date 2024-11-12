import React from "react";
import { findCorrectIcon } from "../../utils/utils";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";

export default function Hourly({ hourlyDesc }: { hourlyDesc: any }) {
	const { coldMeasuringUnit, dispatch: coldMeasureDispatch } =useColdMeasureContext();
	return (
		<div className="hourly">
			{hourlyDesc?.map((hourDesc: any, index: number) => {
				return (
					<div key={index} className={`hour-div hour${index}`}>
						<p>{coldMeasuringUnit == 'Celsius' ? hourDesc.tempC : hourDesc.tempF}&#176;</p>
						<img className="hour-div-img" src={findCorrectIcon(hourDesc.weatherDesc[0].value)} alt="" />
					</div>
				);
			})}
		</div>
	);
}
