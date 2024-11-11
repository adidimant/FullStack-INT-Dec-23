import { memo, useCallback, useEffect, useState, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import axios, { AxiosResponse } from "axios";
import {  ApiResFormatted} from "../../types/types";
import { sortApiData,sortApiFailed } from "../../utils/utils";
import Today from "../days/Today";
import { useWeatherContext } from "../../Context/WeatherContext";
import Tomorrow from "../days/Tomorrow";
import IntwoDays from "../days/IntwoDays";
import { useDayDisplayedContext } from "../../Context/dayDisplayed";
import "./MainContainer.css";
import SkeletonDay from "../days/SkeletonDay";



function MainContainer() {
	// const [dayDisplayed, setDayDisplayed] = useState<'Today'| 'Tomorrow' | 'IntwoDays'>('Today');
	const {fetchedData, setFetchedData} = useWeatherContext()
	const {dayDisplayed, dispatch} = useDayDisplayedContext()

	const fetchData = useCallback(async (inputCity: string) => {
		try {
			const fetchData = await axios.get(`https://wttr.in/${inputCity}?format=j1`);
			const fetchedDateFormatted: ApiResFormatted = sortApiData(fetchData)
			// console.log(fetchData)
			// console.log(fetchedDateFormatted)
			setFetchedData(fetchedDateFormatted)
			return fetchedDateFormatted;
		} catch (err) {
			setFetchedData(sortApiFailed())
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
					<h2>{`${fetchedData?.city || ""}${fetchedData?.country ? `, `: ``}${fetchedData?.country || ''}`}</h2>
				</div>
			</div>
			<div id="days">
				{dayDisplayed == `Today`  ? <Today /> : <></>}
				{dayDisplayed == `Tomorrow` ? <Tomorrow /> : <></>}
				{dayDisplayed == `IntwoDays` ? <IntwoDays /> : <></>}

			</div>
		</div>
	);
}

export default memo(MainContainer);
