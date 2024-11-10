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
  weatherCode: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
  visibility: string;
  visibilityMiles: string;
  uvIndex: string;
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
  weatherCode: string;
  windspeedKmph: string;
  windspeedMiles: string;
  humidity: string;
  visibility: string;
  visibilityMiles: string;
  winddirDegree: string;
  uvIndex: string;
};

type AstronomyData = {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
};

type DailyWeather = {
  astronomy: AstronomyData[];
  avgtempC: string;
  avgtempF: string;
  date: string;
  hourly: HourlyForecast[];
  uvIndex: string;
  sunHour: string;
  mintempC: string;
  mintempF: string;
  maxtempC: string;
  maxtempF: string;
};

export type WeatherApiResponse = {
  current_condition: CurrentCondition[];
  nearest_area: AreaInfo[];
  weather: DailyWeather[];
};

export type WeatherDataType = WeatherApiResponse | "api error" | "not found" | null;
