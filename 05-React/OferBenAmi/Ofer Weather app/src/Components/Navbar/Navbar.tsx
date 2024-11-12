import { memo, useEffect } from "react";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from '../../Context/DistanceUnit';
import { useDayDisplayedContext } from "../../Context/dayDisplayed";
import { DayDisplayed } from "../../types/types";
import './Navbar.css'

function Navbar() {
	const {dayDisplayed, dispatch: dispatchSetDayDisplayed} = useDayDisplayedContext()
	const { coldMeasuringUnit, dispatch: coldMeasureDispatch } =useColdMeasureContext();
	const { distanceMeasureUnit, dispatch: DistanceMeasureDispatch } =useDistanceMeasureContext();

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
	function handleDaySelect(day: DayDisplayed){
		const SelectedDay = document.querySelector('.'+day);
		const Today = document.querySelector('.Today');
		const Tomorrow = document.querySelector('.Tomorrow');
		const IntwoDays = document.querySelector('.IntwoDays');
		Today?.classList.remove('active-day');
		Tomorrow?.classList.remove('active-day');
		IntwoDays?.classList.remove('active-day');
		SelectedDay?.classList.add('active-day')


		dispatchSetDayDisplayed?.(day)
	}

	useEffect(()=>{
		document.querySelector('.Today')?.classList.add('active-day')
	},[])
	return (
		<div id="navbar">
			<div className="days-pick">
				<button className="Today" onClick={()=> handleDaySelect('Today')}>Today</button>
				<button className="Tomorrow" onClick={()=> handleDaySelect('Tomorrow')}>Tomorrow</button>
				<button className="IntwoDays" onClick={()=> handleDaySelect('IntwoDays')}>In Two Days</button>
			</div>
			<div className="navbar-btns">
			<button className="navbar-btn" onClick={handleColdMeasuringUnit}>
				cold Unit: {coldMeasuringUnit}
			</button>
			<button className="navbar-btn" onClick={handleDistanceMeasuringUnit}>
				distance Unit: {distanceMeasureUnit}s
			</button>
			</div>
		</div>
	);
}

export default memo(Navbar);
