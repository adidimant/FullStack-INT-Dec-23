export interface City {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface Weather {
  current: {
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
    uvIndex: number;
  };
  forecast: {
    date: string;
    temp: {
      min: number;
      max: number;
    };
    condition: string;
    icon: string;
    precipitation: number;
    humidity: number;
    windSpeed: number;
    sunrise: string;
    sunset: string;
  }[];
}

export interface WeatherResponse {
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: {
      main: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    pop: number;
  }[];
  city: {
    sunrise: number;
    sunset: number;
    timezone: number;
  };
}