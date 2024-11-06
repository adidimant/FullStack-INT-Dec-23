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
    console.error("Couldn't get wind object:", error);
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
