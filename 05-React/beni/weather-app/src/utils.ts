import { UnitType } from "./types/unitTypes";
import { WeatherApiResponse, WeatherDataType } from "./types/weatherApiTypes";

export const convertDayNumToDayName = (day: number): string | Error => {
  if (day > 6 || day < 0) {
    throw new Error("Number should be between 0 and 6 included.");
  }

  let dayName = "";
  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
  }

  return dayName;
};

export const isWeatherDataValid = (data: WeatherDataType): boolean => {
  if (
    data !== null &&
    data !== "api error" &&
    data !== "not found" &&
    typeof data == "object" &&
    "current_condition" in data
  ) {
    return true;
  } else return false;
};

export const getCityName = (data: WeatherDataType) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    return (data as WeatherApiResponse).nearest_area[0].areaName[0].value || "N/A";
  } catch (error) {
    console.error("Can't find location object", error);
    return "N/A";
  }
};

export const getCountryName = (data: WeatherDataType) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    return (data as WeatherApiResponse).nearest_area[0].country[0].value || "N/A";
  } catch (error) {
    console.error("Can't find location object", error);
    return "N/A";
  }
};

export const getDayName = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    const dateString = (data as WeatherApiResponse).weather[day - 1].date;
    if (dateString) {
      const date = new Date(dateString);
      return convertDayNumToDayName(date.getDay());
    }
  } catch (error) {
    console.error("Couldn't find date object:", error);
  }
  return "N/A";
};

export const getTemperature = (data: WeatherDataType, day: number, unit: UnitType) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    const dayData = (data as WeatherApiResponse).weather[day - 1];
    if (unit == "imperial") {
      if (day == 1) {
        return (data as WeatherApiResponse).current_condition[0].temp_F;
      } else return dayData.avgtempF;
    } else if (unit == "metric") {
      if (day == 1) {
        return (data as WeatherApiResponse).current_condition[0].temp_C;
      } else return dayData.avgtempC;
    }
  } catch (error) {
    console.error("Couldn't get temp object:", error);
    return "N/A";
  }
};

export const getWindSpeed = (data: WeatherDataType, day: number, unit: UnitType) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  try {
    const hourly = (data as WeatherApiResponse).weather[day - 1].hourly[4];
    if (unit == "imperial") {
      if (day == 1) {
        return (data as WeatherApiResponse).current_condition[0].windspeedMiles;
      } else return hourly.windspeedMiles;
    } else if (unit == "metric") {
      if (day == 1) {
        return (data as WeatherApiResponse).current_condition[0].windspeedKmph;
      } else return hourly.windspeedKmph;
    }
  } catch (error) {
    console.error("Couldn't get windspeed object:", error);
    return "N/A";
  }
};

export const getWindDirDegree = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  try {
    const winddirDegree =
      day == 1
        ? (data as WeatherApiResponse).current_condition[0].winddirDegree
        : (data as WeatherApiResponse).weather[day - 1].hourly[0].winddirDegree;
    return winddirDegree ? winddirDegree : "N/A";
  } catch (error) {
    console.error("Couldn't get winddirDegree object:", error);
    return "N/A";
  }
};

export const getWeatherDescription = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  try {
    const hourlyDesc = (data as WeatherApiResponse).weather[day - 1].hourly[4].weatherDesc[0].value;
    const currentDesc = (data as WeatherApiResponse).current_condition[0].weatherDesc[0].value;
    const description = day == 1 ? currentDesc : hourlyDesc;
    return description
      ? description.charAt(0).toUpperCase() + description.slice(1).toLowerCase().trim()
      : "N/A";
  } catch (error) {
    console.error("Couldn't get weather description:", error);
    return "N/A";
  }
};

export const getWeatherDescCode = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  try {
    const hourlyCode = (data as WeatherApiResponse).weather[day - 1].hourly[4].weatherCode;
    const currentCode = (data as WeatherApiResponse).current_condition[0].weatherCode;
    const code = day == 1 ? currentCode : hourlyCode;
    return code ? code : "N/A";
  } catch (error) {
    console.error("Couldn't get weather code:", error);
    return "N/A";
  }
};

export const isNightTime = (day: number) => {
  if (day == 1) {
    const currentTime = new Date().getTime();
    if (currentTime > 6 && currentTime < 18) {
      return false;
    }
    return true;
  }
  return false;
};

export const getUvIndex = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  try {
    const uvIndex = (data as WeatherApiResponse).weather[day - 1].uvIndex;
    return uvIndex ? uvIndex : "N/A";
  } catch (error) {
    console.error("Couldn't get uvIndex object:", error);
    return "N/A";
  }
};

export const getHumidity = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  try {
    if (day == 1) {
      const humidity = (data as WeatherApiResponse).current_condition[0].humidity;
      return humidity ? humidity : "N/A";
    }

    const humidity = (data as WeatherApiResponse).weather[day - 1].hourly[4].humidity;
    return humidity ? humidity : "N/A";
  } catch (error) {
    console.error("Couldn't get humidity object:", error);
    return "N/A";
  }
};

export const getVisibility = (data: WeatherDataType, day: number, unit: UnitType) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  try {
    if (day == 1) {
      const visibility =
        unit == "imperial"
          ? (data as WeatherApiResponse).current_condition[0].visibilityMiles
          : (data as WeatherApiResponse).current_condition[0].visibility;

      return visibility ? visibility : "N/A";
    }

    const visibility =
      unit == "imperial"
        ? (data as WeatherApiResponse).weather[day - 1].hourly[0].visibilityMiles
        : (data as WeatherApiResponse).weather[day - 1].hourly[0].visibility;

    return visibility ? visibility : "N/A";
  } catch (error) {
    console.error("Couldn't get visibility object:", error);
    return "N/A";
  }
};

export const getSunrise = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    const sunrise = (data as WeatherApiResponse).weather[day - 1].astronomy[0].sunrise;
    return sunrise ? sunrise : "N/A";
  } catch (error) {
    console.error("Couldn't get sunrise object:", error);
    return "N/A";
  }
};

export const getSunset = (data: WeatherDataType, day: number) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    const sunset = (data as WeatherApiResponse).weather[day - 1].astronomy[0].sunset;
    return sunset ? sunset : "N/A";
  } catch (error) {
    console.error("Couldn't get sunset object:", error);
    return "N/A";
  }
};

export const getMaxTemp = (data: WeatherDataType, day: number, unit: UnitType) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    const maxTemp =
      unit == "imperial"
        ? (data as WeatherApiResponse).weather[day - 1].maxtempF
        : (data as WeatherApiResponse).weather[day - 1].maxtempC;
    return maxTemp ? maxTemp : "N/A";
  } catch (error) {
    console.error("Couldn't get maxtemp object:", error);
    return "N/A";
  }
};

export const getminTemp = (data: WeatherDataType, day: number, unit: UnitType) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }
  try {
    const minTemp =
      unit == "imperial"
        ? (data as WeatherApiResponse).weather[day - 1].mintempF
        : (data as WeatherApiResponse).weather[day - 1].mintempC;
    return minTemp ? minTemp : "N/A";
  } catch (error) {
    console.error("Couldn't get mintemp object:", error);
    return "N/A";
  }
};
