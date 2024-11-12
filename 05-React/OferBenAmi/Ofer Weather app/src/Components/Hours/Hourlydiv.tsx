import  { useCallback, useState } from "react";
import Hourly from "./Hourly";

export default function Hourlydiv({hourlyData}:{hourlyData:any} ) {
	const [isHourlyOpen, setIsHourlyOpen] = useState<boolean>(false);

	const handleHourly = useCallback(() => {
		setIsHourlyOpen((isHourlyOpen) => !isHourlyOpen);
	},[isHourlyOpen])

	return (
        <div className="hourly-div">
				{isHourlyOpen && <Hourly hourlyDesc={hourlyData}/> }
				<button onClick={handleHourly}>
					{isHourlyOpen ? "close" : "open"} by hour
				</button>
			</div>

	);
}
