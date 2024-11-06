export interface WeatherAPIResponse {
    current_condition: CurrentCondition[];
    nearest_area: NearestArea[];
    request: RequestData[];
    weather: WeatherData[];
};
  
 export interface CurrentCondition {
    FeelsLikeC: string;
    FeelsLikeF: string;
    cloudcover: string;
    humidity: string;
    localObsDateTime: string;
    observation_time: string;
    precipInches: string;
    precipMM: string;
    pressure: string;
    pressureInches: string;
    temp_C: string;
    temp_F: string;
    uvIndex: string;
    visibility: string;
    visibilityMiles: string;
    weatherCode: string;
    weatherDesc: WeatherDescription[];
    weatherIconUrl: WeatherIconUrl[];
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
 };
  
  export interface NearestArea {
    areaName: WeatherDescription[];
    country: WeatherDescription[];
    latitude: string;
    longitude: string;
    population: string;
    region: WeatherDescription[];
    weatherUrl: WeatherIconUrl[];
  };
  
  export interface RequestData {
    query: string;
    type: string;
  };
  
  export interface WeatherData {
    avgtempC: string;
    avgtempF: string;
    date: string;
    hourly: HourlyWeather[];
    maxtempC: string;
    maxtempF: string;
    mintempC: string;
    mintempF: string;
    sunHour: string;
    totalSnow_cm: string;
    uvIndex: string;
  };
  
  export interface HourlyWeather {
    DewPointC: string;
    DewPointF: string;
    FeelsLikeC: string;
    FeelsLikeF: string;
    HeatIndexC: string;
    HeatIndexF: string;
    WindChillC: string;
    WindChillF: string;
    WindGustKmph: string;
    WindGustMiles: string;
    chanceoffog: string;
    chanceoffrost: string;
    chanceofhightemp: string;
    chanceofovercast: string;
    chanceofrain: string;
    chanceofremdry: string;
    chanceofsnow: string;
    chanceofsunshine: string;
    chanceofthunder: string;
    chanceofwindy: string;
    cloudcover: string;
    humidity: string;
    precipInches: string;
    precipMM: string;
    pressure: string;
    pressureInches: string;
    tempC: string;
    tempF: string;
    time: string;
    uvIndex: string;
    visibility: string;
    visibilityMiles: string;
    weatherCode: string;
    weatherDesc: WeatherDescription[];
    weatherIconUrl: WeatherIconUrl[];
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
  };
  
  export interface WeatherDescription {
    value: string;
  };
  
  export interface WeatherIconUrl {
    value: string;
  };
  
  export interface DayWeather {
    date: string;
    weather_desc: string;
    icon: string;
    temp: string;
  };