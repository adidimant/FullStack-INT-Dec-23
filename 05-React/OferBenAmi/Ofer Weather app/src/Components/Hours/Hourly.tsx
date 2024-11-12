import { findCorrectIcon } from "../../utils/utils";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";

export default function Hourly({ hourlyDesc }: { hourlyDesc: any }) {
	const { coldMeasuringUnit } =useColdMeasureContext();
	const times = ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00']
	return (
		<div className="hourly">
			{hourlyDesc?.map((hourDesc: any, index: number) => {
				return (
					<div key={index} className={`hour-div hour${index}`}>
						<p className="hour-time">{times[index]} </p>
						<p>{coldMeasuringUnit == 'Celsius' ? hourDesc.tempC : hourDesc.tempF}&#176;</p>
						<img className="hour-div-img" src={findCorrectIcon(hourDesc.weatherDesc[0].value)} alt="" />
					</div>
				);
			})}
		</div>
	);
}
