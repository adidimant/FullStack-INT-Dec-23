import { memo,useRef, useEffect, useState } from "react";
import axios from "axios";
import "./MainContainer.css";



function MainContainer() {
	const fetchData = useRef({})
	const [city, setCity] = useState<string>("");
	const [todayDate, setTodayDate] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			const fetchData = await axios.get(
				`https://wttr.in/${city ? city : ''}?format=j1`
			);
			console.log(fetchData)
			if (!city) {
				const nearestArea = fetchData.data.nearest_area[0].areaName[0].value;
				setCity(nearestArea);
				console.log(nearestArea);
			}
			return fetchData;
		};
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
			<div id="days">
				<div id="today" className="weatherDay">
					today {String(city)}
				</div>
				<div id="tomorrow" className="weatherDay">
					b
				</div>
				<div id="twoDays" className="weatherDay">
					c
				</div>
			</div>
		</div>
	);
}

export default memo(MainContainer);
