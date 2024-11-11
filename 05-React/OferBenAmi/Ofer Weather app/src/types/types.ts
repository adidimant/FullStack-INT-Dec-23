export enum days {
	today = 0,
	tomorrow = 1,
	in2Days = 2,
}
export type DateData = {
	date: string;
	avgtempC: string;
	avgtempF: string;
	hourly: string[];
	weatherDesc?: string;
	windspeedKmph?: string;
	windspeedMiles?: string;
};

export type ApiResFormatted = {
	today: DateData;
	tomorrow: DateData;
	in2Days: DateData;
	country: string;
    city: string;
};
export type DayDisplayed = 'Today'| 'Tomorrow' | 'IntwoDays'

export type WeatherTypes = 'sunny'|'cloudy'|'rainy'|'snowy'| 'thunder'| 'defaultWeather';
