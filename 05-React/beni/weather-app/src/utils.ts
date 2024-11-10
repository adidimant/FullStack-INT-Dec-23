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

export const convertHourStringToIndex = (hour: string): number => {
  let hourNum = 0;

  switch (hour) {
    case "00":
      hourNum = 0;
      break;
    case "300":
      hourNum = 1;
      break;
    case "600":
      hourNum = 2;
      break;
    case "900":
      hourNum = 3;
      break;
    case "1200":
      hourNum = 4;
      break;
    case "1500":
      hourNum = 5;
      break;
    case "1800":
      hourNum = 6;
      break;
    case "2100":
      hourNum = 7;
      break;
  }

  return hourNum;
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

export const getTemperature = (
  data: WeatherDataType,
  day: number,
  unit: UnitType,
  hour: string
) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    const dayData = (data as WeatherApiResponse).weather[day - 1];
    if (unit == "imperial") {
      if (hour == "currently") {
        return (data as WeatherApiResponse).current_condition[0].temp_F || "N/A";
      } else return dayData.hourly[chosenHour].tempF || "N/A";
    } else if (unit == "metric") {
      if (hour == "currently") {
        return (data as WeatherApiResponse).current_condition[0].temp_C || "N/A";
      } else return dayData.hourly[chosenHour].tempC || "N/A";
    }
  } catch (error) {
    console.error("Couldn't get temp object:", error);
    return "N/A";
  }
};

export const getWindSpeed = (data: WeatherDataType, day: number, unit: UnitType, hour: string) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    if (unit == "imperial") {
      if (hour == "currently") {
        return (data as WeatherApiResponse).current_condition[0].windspeedMiles || "N/A";
      } else
        return (
          (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].windspeedMiles || "N/A"
        );
    } else if (unit == "metric") {
      if (hour == "currently") {
        return (data as WeatherApiResponse).current_condition[0].windspeedKmph || "N/A";
      } else
        return (
          (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].windspeedKmph || "N/A"
        );
    }
  } catch (error) {
    console.error("Couldn't get windspeed object:", error);
    return "N/A";
  }
};

export const getWindDirDegree = (data: WeatherDataType, day: number, hour: string) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    const winddirDegree =
      hour == "currently"
        ? (data as WeatherApiResponse).current_condition[0].winddirDegree
        : (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].winddirDegree;
    return winddirDegree || "N/A";
  } catch (error) {
    console.error("Couldn't get winddirDegree object:", error);
    return "N/A";
  }
};

export const getWindDirectionCode = (degreeString: string) => {
  if (isNaN(Number(degreeString))) {
    return "N/A";
  }

  const degree = Number(degreeString);

  if (degree >= 348.75 || degree < 11.25) return "N";
  if (degree >= 11.25 && degree < 33.75) return "NNE";
  if (degree >= 33.75 && degree < 56.25) return "NE";
  if (degree >= 56.25 && degree < 78.75) return "ENE";
  if (degree >= 78.75 && degree < 101.25) return "E";
  if (degree >= 101.25 && degree < 123.75) return "ESE";
  if (degree >= 123.75 && degree < 146.25) return "SE";
  if (degree >= 146.25 && degree < 168.75) return "SSE";
  if (degree >= 168.75 && degree < 191.25) return "S";
  if (degree >= 191.25 && degree < 213.75) return "SSW";
  if (degree >= 213.75 && degree < 236.25) return "SW";
  if (degree >= 236.25 && degree < 258.75) return "WSW";
  if (degree >= 258.75 && degree < 281.25) return "W";
  if (degree >= 281.25 && degree < 303.75) return "WNW";
  if (degree >= 303.75 && degree < 326.25) return "NW";
  if (degree >= 326.25 && degree < 348.75) return "NNW";
};

export const getWeatherDescription = (data: WeatherDataType, day: number, hour: string) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    if (hour == "currently") {
      const currentDesc = (data as WeatherApiResponse).current_condition[0].weatherDesc[0].value;
      return currentDesc || "N/A";
    }
    const hourlyDesc = (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour]
      .weatherDesc[0].value;
    return hourlyDesc || "N/A";
  } catch (error) {
    console.error("Couldn't get weather description:", error);
    return "N/A";
  }
};

export const getWeatherDescCode = (data: WeatherDataType, day: number, hour: string) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    if (hour == "currently") {
      return (data as WeatherApiResponse).current_condition[0].weatherCode || "N/A";
    }
    return (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].weatherCode || "N/A";
  } catch (error) {
    console.error("Couldn't get weather code:", error);
    return "N/A";
  }
};

export const isNightTime = (hour: string) => {
  if (hour == "currently") {
    const currentTime = new Date().getHours();
    if (currentTime > 6 && currentTime < 18) {
      return false;
    }
    return true;
  } else if (convertHourStringToIndex(hour) <= 5 && convertHourStringToIndex(hour) >= 2) {
    return false;
  }
  return true;
};

export const getUvIndex = (data: WeatherDataType, day: number, hour: string) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    if (hour == "currently") {
      return (data as WeatherApiResponse).current_condition[0].uvIndex || "N/A";
    }
    return (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].uvIndex || "N/A";
  } catch (error) {
    console.error("Couldn't get uvIndex object:", error);
    return "N/A";
  }
};

export const getHumidity = (data: WeatherDataType, day: number, hour: string) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    if (hour == "currently") {
      return (data as WeatherApiResponse).current_condition[0].humidity || "N/A";
    }
    return (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].humidity || "N/A";
  } catch (error) {
    console.error("Couldn't get humidity object:", error);
    return "N/A";
  }
};

export const getVisibility = (data: WeatherDataType, day: number, unit: UnitType, hour: string) => {
  if (!isWeatherDataValid(data)) {
    return "N/A";
  }

  const chosenHour = convertHourStringToIndex(hour);

  try {
    if (hour == "currently") {
      const visibility =
        unit == "imperial"
          ? (data as WeatherApiResponse).current_condition[0].visibilityMiles
          : (data as WeatherApiResponse).current_condition[0].visibility;

      return visibility ? visibility : "N/A";
    }

    const visibility =
      unit == "imperial"
        ? (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].visibilityMiles
        : (data as WeatherApiResponse).weather[day - 1].hourly[chosenHour].visibility;

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
