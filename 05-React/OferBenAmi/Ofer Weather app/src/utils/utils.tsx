import { ApiResFormatted, days } from "../types/types";

export function sortApiData(fetchData: any): ApiResFormatted {
	const sortedData = {
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
		city: fetchData.data.nearest_area[0].areaName[0].value,
	};
    return sortedData
}
