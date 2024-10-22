import { memo } from "react";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from '../../Context/DistanceUnit';
import './Navbar.css'

function Navbar() {
	const { coldMeasuringUnit, dispatch: coldMeasureDispatch } =
		useColdMeasureContext();
	const { distanceMeasureUnit, dispatch: DistanceMeasureDispatch } =
		useDistanceMeasureContext();

	function handleColdMeasuringUnit() {
		if (coldMeasuringUnit === "Celsius" && coldMeasureDispatch) {
			coldMeasureDispatch("Fahrenheit");
		} else if (coldMeasureDispatch) {
			coldMeasureDispatch("Celsius");
		}
	}

	function handleDistanceMeasuringUnit() {
		if (distanceMeasureUnit === "km" && DistanceMeasureDispatch) {
			DistanceMeasureDispatch("mile");
		} else if (DistanceMeasureDispatch) {
			DistanceMeasureDispatch("km");
		}
	}
	return (
		<div id="navbar">
			<button className="navbar-btn" onClick={handleColdMeasuringUnit}>
				cold Unit: {coldMeasuringUnit}
			</button>
			<button className="navbar-btn" onClick={handleDistanceMeasuringUnit}>
				distance Unit: {distanceMeasureUnit}s
			</button>
		</div>
	);
}

export default memo(Navbar);
