import { memo, useCallback, useEffect, useState, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import { days, ApiResFormatted} from "../../types/types";
import "./MainContainer.css";



function MainContainer() {
	// const [city, setCity] = useState<string>("");
	const [fetchedData, setFetchedData] = useState<ApiResFormatted>();

	const fetchData = useCallback(async (inputCity: string) => {
		try {
			const fetchData = await axios.get(
				`https://wttr.in/${inputCity}?format=j1`
			);
			const fetchedDateFormatted: ApiResFormatted = {
				today: {
					date: fetchData.data.weather[days.today].date,
					avgtempC: fetchData.data.weather[days.today].avgtempC,
					avgtempF: fetchData.data.weather[days.today].avgtempC,
				},
				tomorrow: {
					date: fetchData.data.weather[days.tomorrow].date,
					avgtempC: fetchData.data.weather[days.tomorrow].avgtempC,
					avgtempF: fetchData.data.weather[days.tomorrow].avgtempC,
				},
				in2Days: {
					date: fetchData.data.weather[days.in2Days].date,
					avgtempC: fetchData.data.weather[days.in2Days].avgtempC,
					avgtempF: fetchData.data.weather[days.in2Days].avgtempC,
				},
				country: fetchData.data.nearest_area[0].country[0].value,
				city: fetchData.data.nearest_area[0].areaName[0].value
			};
			if (inputCity == "") {
				setFetchedData(fetchedDateFormatted)
			}

			// setFetchedData(fetchedDateFormatted);
			// setCity(nearestArea);
			return fetchedDateFormatted;
		} catch (err) {
			//TODO - Update UI when the server throws an error!!
			console.log(`eroprrrr oferrrrr`);
			console.error(err);
		}
	}, []);

	const handleAreaInput = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value || e.target.value == "") {
			const res = await fetchData(e.target.value);
			if (res) {
				setFetchedData(res)
			}
		}
	};

	const debounceAreaInput = debounce(handleAreaInput, 650);

	useEffect(() => {
		try {
			fetchData("");
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
					<h2>{`${fetchedData?.city}, ${fetchedData?.country || ''}`}</h2>
				</div>
			</div>
			<div id="days">
				<div id="today" className="weatherDay">
					<h3>Today: {fetchedData?.today.date}</h3>
					<p>{fetchedData?.today.avgtempC}</p>
				</div>
				<div id="tomorrow" className="weatherDay">
					<h3>Tomorrow: {fetchedData?.tomorrow.date}</h3>
					<p>{fetchedData?.tomorrow.avgtempC}</p>
				</div>
				<div id="twoDays" className="weatherDay">
					<h3>The day after tomorrow: {fetchedData?.in2Days.date}</h3>
					<p>{fetchedData?.in2Days.avgtempC}</p>
				</div>
			</div>
		</div>
	);
}

export default memo(MainContainer);
