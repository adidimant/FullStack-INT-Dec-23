import { useColdMeasureContext } from "../Context/ColdMeasuringUnit";
import { findCorrectIcon } from "../utils/utils";

export default function Temp({avgtempC,avgtempF,date,weatherDesc}: {avgtempC:string,avgtempF:string,date:string,weatherDesc: undefined|string}) {
	const { coldMeasuringUnit } = useColdMeasureContext();

	return (
		<div className="temp-div">
					<p className="temp">
						{coldMeasuringUnit == "Celsius"
							? avgtempC
							: avgtempF}
						{date ? <>&#176;</> : ""}
					</p>
					<img
						className="weather-icon"
						src={findCorrectIcon(weatherDesc)}
						alt="sunny"
					/>
				</div>
	);
}
