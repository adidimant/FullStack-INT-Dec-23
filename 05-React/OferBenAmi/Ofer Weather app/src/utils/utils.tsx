import { ApiResFormatted, WeatherTypes, days } from "../types/types";
import sunny from '../assets/sunny.svg';
import cloudy from '../assets/cloudy.svg';
import rainy from '../assets/rainy.svg';
import snowy from '../assets/snowy.svg';
import thunder from '../assets/thunder.svg';
import defaultWeather from '../assets/defaultWeather.svg'
export function sortApiData(fetchData: any): ApiResFormatted {
	const sortedData: ApiResFormatted = {
		today: {
			date: fetchData.data.weather[days.today].date,
			avgtempC: fetchData.data.weather[days.today].avgtempC,
			avgtempF: fetchData.data.weather[days.today].avgtempF,
			hourly:fetchData.data.weather[days.today].hourly,
			weatherDesc: fetchData.data.current_condition[0].weatherDesc[0].value,
			windspeedKmph: fetchData.data.current_condition[0].windspeedKmph,
			windspeedMiles: fetchData.data.current_condition[0].windspeedMiles
		},
		tomorrow: {
			date: fetchData.data.weather[days.tomorrow].date,
			avgtempC: fetchData.data.weather[days.tomorrow].avgtempC,
			avgtempF: fetchData.data.weather[days.tomorrow].avgtempF,
			hourly:fetchData.data.weather[days.tomorrow].hourly,
			weatherDesc: fetchData.data.weather[days.tomorrow].hourly[3].weatherDesc[0].value,
			windspeedKmph: fetchData.data.weather[days.tomorrow].hourly[3].windspeedKmph,
			windspeedMiles: fetchData.data.weather[days.tomorrow].hourly[3].windspeedMiles,
		},
		in2Days: {
			date: fetchData.data.weather[days.in2Days].date,
			avgtempC: fetchData.data.weather[days.in2Days].avgtempC,
			avgtempF: fetchData.data.weather[days.in2Days].avgtempF,
			hourly:fetchData.data.weather[days.in2Days].hourly,
			weatherDesc: fetchData.data.weather[days.in2Days].hourly[3].weatherDesc[0].value,
			windspeedKmph: fetchData.data.weather[days.in2Days].hourly[3].windspeedKmph,
			windspeedMiles: fetchData.data.weather[days.in2Days].hourly[3].windspeedMiles,
		},
		country: fetchData.data.nearest_area[0].country[0].value,
		city: fetchData.data.nearest_area[0].areaName[0].value,
	};
    return sortedData
}

export function sortApiFailed(): ApiResFormatted {
	const sortedData: ApiResFormatted = {
		today: {
			date: '',
			avgtempC: '',
			avgtempF: '',
			hourly: [],

		},
		tomorrow: {
			date: '',
			avgtempC: '',
			avgtempF: '',
			hourly: [],
		},
		in2Days: {
			date: '',
			avgtempC: '',
			avgtempF: '',
			hourly: [],
		},
		country: '',
		city: 'Not able to get Country',
	};
    return sortedData
}

export function findCorrectIcon(weatherDesc: string| undefined){
	if(weatherDesc?.toLocaleLowerCase().includes('sun' || 'clear')) return  sunny;
	if(weatherDesc?.toLocaleLowerCase().includes('rain')) return rainy
	if(weatherDesc?.toLocaleLowerCase().includes('snow')) return snowy
	if(weatherDesc?.toLocaleLowerCase().includes('cloud')) return cloudy
	if(weatherDesc?.toLocaleLowerCase().includes('thunder')) return thunder
	return defaultWeather
}
