export default interface WeatherApiResponse {
    current_condition: CurrentCondition[];
    nearest_area: NearestArea[];
    weather: Weather[];
}

export interface CurrentCondition {
    localObsDateTime: string;
    observation_time: string; 
    temp_C: string;
    temp_F: string;
    FeelsLikeC: string,
    FeelsLikeF: string,
    cloudcover: string,
    humidity: string,
    pressure: string,
    pressureInches: string,
    uvIndex: string,
    visibility: string,
    visibilityMiles: string,
    weatherCode: string,
    weatherDesc: Array<{ value: string }>;
    winddir16Point: string,
    winddirDegree: string,
    windspeedKmph: string,
    windspeedMiles: string,
}

export interface NearestArea {
    areaName: Array<{ value: string }>,
    country: Array<{ value: string }>,
    latitude: string,
    longitude: string
}

export interface Weather {
    date: string;
    avgtempC: string;
    avgtempF: string;
    astronomy: Astronomy[];
    hourly: Hourly[];
    maxtempC: string;
    maxtempF: string;
    mintempC: string;
    mintempF: string;
}

export interface Astronomy {
    sunrise: string,
    sunset: string
}

export interface Hourly {
    DewPointC: string,
    DewPointF: string,
    FeelsLikeC: string,
    FeelsLikeF: string,
    HeatIndexC: string,
    HeatIndexF: string,
    WindChillC: string,
    WindChillF: string,
    WindGustKmph: string,
    WindGustMiles: string,
    chanceoffog: string,
    chanceoffrost: string,
    chanceofhightemp: string,
    chanceofovercast: string,
    chanceofrain: string,
    chanceofremdry: string,
    chanceofsnow: string,
    chanceofsunshine: string,
    chanceofthunder: string,
    chanceofwindy: string,
    cloudcover: string,
    humidity: string,
    pressure: string,
    pressureInches: string,
    tempC: string,
    tempF: string,
    time: string,
    uvIndex: string,
    visibility: string,
    visibilityMiles: string,
    weatherCode: string    
    weatherDesc: Array<{ value: string }>,
    winddir16Point: string,
    winddirDegree: string,
    windspeedKmph: string,
    windspeedMiles: string,
}

export interface TimeApiResponse {
    year: string,
    month: string,
    day: string,
    hour: string,
    minute: string,
    seconds: string,
    milliSeconds: string,
    dateTime: string,
    date: string,
    time: string,
    timeZone: string,
    dayOfWeek: string,
    dstActive: string
}