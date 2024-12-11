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