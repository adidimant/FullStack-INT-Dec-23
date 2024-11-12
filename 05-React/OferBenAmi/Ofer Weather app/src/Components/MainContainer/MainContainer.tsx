import { memo, useCallback, useEffect, useState, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import {  ApiResFormatted} from "../../types/types";
import { sortApiData,sortApiFailed } from "../../utils/utils";
import Today from "../days/Today";
import { useWeatherContext } from "../../Context/WeatherContext";
import Tomorrow from "../days/Tomorrow";
import IntwoDays from "../days/IntwoDays";
import { useDayDisplayedContext } from "../../Context/dayDisplayed";
import "./MainContainer.css";
import AdvanceToday from "../Advance/AdvanceToday";
import AdvanceTomorrow from "../Advance/AdvanceTomorrow";



function MainContainer() {
	// const [dayDisplayed, setDayDisplayed] = useState<'Today'| 'Tomorrow' | 'IntwoDays'>('Today');
	const {fetchedData, setFetchedData} = useWeatherContext()
	const {dayDisplayed} = useDayDisplayedContext()
	const [isAdvanceOptOpen, setIsAdvanceOptOpen] = useState<boolean>(false)

	const fetchData = useCallback(async (inputCity: string) => {
		try {
			const fetchData = await axios.get(`https://wttr.in/${inputCity}?format=j1`);
			const fetchedDateFormatted: ApiResFormatted = sortApiData(fetchData)
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
	const handleAdvanceOpt = ()=> {
		setIsAdvanceOptOpen(isAdvanceOptOpen => !isAdvanceOptOpen)
	}

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
			<div className="area-selection">

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
			<button onClick={handleAdvanceOpt} className="advance-opt-btn">{isAdvanceOptOpen ?  'close': 'open'} Advance {isAdvanceOptOpen ? <> &#8593;</>: <> &#8595;</>} </button>
			<div className="">
				{dayDisplayed == `Today` && isAdvanceOptOpen? <AdvanceToday /> : <></>}
				{dayDisplayed == `Tomorrow` && isAdvanceOptOpen? <AdvanceTomorrow /> : <></>}
				{dayDisplayed == `IntwoDays` && isAdvanceOptOpen? <AdvanceToday /> : <></>}


			</div>
		</div>
	);
}

export default memo(MainContainer);
