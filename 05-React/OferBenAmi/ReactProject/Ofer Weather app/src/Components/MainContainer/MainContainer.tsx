import { memo, useEffect, useState } from "react";
import axios from "axios";
import "./MainContainer.css";

type RelaventDataType = {
	city: string;
}

function MainContainer() {
	const [relaventData, setRelaventData] = useState<RelaventDataType>({});

	useEffect(() => {
		const fetchData = async () => {
			const apiData = await axios.get(
				`https://wttr.in/${relaventData.city ? relaventData.city : ""}?format=j1`
			);
			console.log(apiData);
			if (!relaventData.city) {
				const nearestArea = apiData.data.nearest_area[0].areaName[0].value;
				setRelaventData((relaventData)=>{

				});
				console.log(relaventData);
			}
			return apiData;
		};
		try {
			const data = fetchData();
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
					today {String(relaventData)}
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
