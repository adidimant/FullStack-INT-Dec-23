type WeatherDescription = {
  value: string;
};

type CurrentCondition = {
  FeelsLikeC: string;
  FeelsLikeF: string;
  cloudcover: string;
  humidity: string;
  temp_C: string;
  temp_F: string;
  weatherDesc: WeatherDescription[];
  winddir16Point: string;
  windspeedKmph: string;
  windspeedMiles: string;
};

type AreaInfo = {
  areaName: WeatherDescription[];
  country: WeatherDescription[];
  region: WeatherDescription[];
};

type HourlyForecast = {
  time: string;
  tempC: string;
  tempF: string;
  weatherDesc: WeatherDescription[];
  windspeedKmph: string;
  windspeedMiles: string;
};

type DailyWeather = {
  avgtempC: string;
  avgtempF: string;
  date: string;
  hourly: HourlyForecast[];
};

export type WeatherApiResponse = {
  current_condition: CurrentCondition[];
  nearest_area: AreaInfo[];
  weather: DailyWeather[];
};

export type WeatherDataType = WeatherApiResponse | "api error" | "not found" | null;
