import { memo, useRef, useEffect, useState, ChangeEvent } from "react";
import debounce from 'lodash.debounce'
import axios from "axios";
import "./MainContainer.css";

function MainContainer() {
	const [city, setCity] = useState<string>("");
	const [threeDays, setThreeDays] = useState<string[]>([]);

	const fetchData = async () => {
		try {
			const fetchData = await axios.get(
				`https://wttr.in/${city ? city : ""}?format=j1`
			);
			console.log(fetchData);
			if (!city) {
				const nearestArea = fetchData.data.nearest_area[0].areaName[0].value;
				const fetchedDate: string[] = [
					fetchData.data.weather[0].date,
					fetchData.data.weather[1].date,
					fetchData.data.weather[2].date,
				];
				setThreeDays(fetchedDate);
				console.log(fetchData);
				setCity(nearestArea);
				console.log(nearestArea);
			} else {
			}
			return fetchData;
		} catch (err) {
			console.error(err);
		}
	};

	const handleAreaInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value || e.target.value == "") {
			console.log(city);
			setCity(e.target.value);
			fetchData()
		}
	};

	const debounceAreaInput = debounce(handleAreaInput, 800)

	useEffect(() => {
		try {
			fetchData();
			// console.log(data)
		} catch (e) {
			console.error(e);
		}
	}, []);

	return (
		<div id="MainContainer">
			<h1>Weather App</h1>
			<div className="area-selection">
				<p>
					type an area: <span>*optional</span>
				</p>
				<input type="text" onInput={debounceAreaInput} />
				<div className="current-area-div">
					<h3>
						current area:
					</h3>
					<h2>{city}</h2>
				</div>
			</div>
			<div id="days">
				<div id="today" className="weatherDay">
					<h3>Today: {threeDays[0]}</h3>
				</div>
				<div id="tomorrow" className="weatherDay">
					<h3>Tomorrow: {threeDays[1]}</h3>
				</div>
				<div id="twoDays" className="weatherDay">
					<h3>The day after tomorrow: {threeDays[2]}</h3>
				</div>
			</div>
		</div>
	);
}

export default memo(MainContainer);
