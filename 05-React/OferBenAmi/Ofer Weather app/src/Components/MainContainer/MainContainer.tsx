import { memo, useCallback, useEffect, useState, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import axios, { AxiosResponse } from "axios";
import {  ApiResFormatted} from "../../types/types";
import { sortApiData } from "../../utils/utils";
import Today from "../days/Today";
import { useWeatherContext } from "../../Context/WeatherContext";
import "./MainContainer.css";
import Tomorrow from "../days/Tomorrow";
import IntwoDays from "../days/IntwoDays";



function MainContainer() {
	// const [fetchedData, setFetchedData] = useState<ApiResFormatted>();
	const [dayDisplayed, setDayDisplayed] = useState('today');
	const {fetchedData, setFetchedData} = useWeatherContext()

	const fetchData = useCallback(async (inputCity: string) => {
		try {
			const fetchData = await axios.get(`https://wttr.in/${inputCity}?format=j1`);
			const fetchedDateFormatted: ApiResFormatted = sortApiData(fetchData)

			setFetchedData(fetchedDateFormatted)
			return fetchedDateFormatted;
		} catch (err) {
			//TODO - Update UI when the server throws an error!!
			console.log(`an error occurred  while trying to reach the server:`);
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
			setDayDisplayed('today')
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
					<h2>{`${fetchedData?.city || ""}${fetchedData?.city ? `, `: ``}${fetchedData?.country || ''}`}</h2>
				</div>
			</div>
			<div id="days">
				<Today />
				<Tomorrow/>
				<IntwoDays/>
			</div>
		</div>
	);
}

export default memo(MainContainer);
