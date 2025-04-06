// Temperature conversion functions
export const celsiusToFahrenheit = (celsius) => {
  if (celsius === null || celsius === undefined) return null;
  return (celsius * 9/5) + 32;
};

export const fahrenheitToCelsius = (fahrenheit) => {
  if (fahrenheit === null || fahrenheit === undefined) return null;
  return (fahrenheit - 32) * 5/9;
};

// Distance conversion functions
export const kmToMiles = (km) => {
  if (km === null || km === undefined) return null;
  return km * 0.621371;
};

export const milesToKm = (miles) => {
  if (miles === null || miles === undefined) return null;
  return miles / 0.621371;
};

// Format temperature based on the selected unit
export const formatTemperature = (temp, unit = 'celsius') => {
  if (temp === null || temp === undefined) return 'N/A';
  
  const temperature = parseFloat(temp);
  if (isNaN(temperature)) return 'N/A';
  
  const formattedTemp = unit === 'celsius' ? temperature : celsiusToFahrenheit(temperature);
  const symbol = unit === 'celsius' ? '°C' : '°F';
  
  return `${Math.round(formattedTemp)}${symbol}`;
};

// Format distance based on the selected unit
export const formatDistance = (distance, unit = 'km') => {
  if (distance === null || distance === undefined) return 'N/A';
  
  const dist = parseFloat(distance);
  if (isNaN(dist)) return 'N/A';
  
  const formattedDist = unit === 'km' ? dist : kmToMiles(dist);
  const symbol = unit === 'km' ? 'km' : 'mi';
  
  return `${Math.round(formattedDist * 10) / 10} ${symbol}`;
};

// Format speed based on the selected distance unit
export const formatSpeed = (speed, unit = 'km') => {
  if (speed === null || speed === undefined) return 'N/A';
  
  const spd = parseFloat(speed);
  if (isNaN(spd)) return 'N/A';
  
  const formattedSpeed = unit === 'km' ? spd : kmToMiles(spd);
  const symbol = unit === 'km' ? 'km/h' : 'mph';
  
  return `${Math.round(formattedSpeed)} ${symbol}`;
};

// Format date to a readable string
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'N/A';
  
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

// Format time to a readable string
export const formatTime = (dateString) => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'N/A';
  
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Get appropriate weather icon based on weather code
export const getWeatherIcon = (weatherCode) => {
  // Map weather codes to icon names
  // This is a simplified mapping, you might want to expand it
  const codeMap = {
    113: 'sunny',
    116: 'partly-cloudy',
    119: 'cloudy',
    122: 'very-cloudy',
    143: 'fog',
    176: 'light-rain',
    179: 'light-snow',
    182: 'light-sleet',
    185: 'light-sleet',
    200: 'thundery',
    227: 'light-snow',
    230: 'heavy-snow',
    248: 'fog',
    260: 'fog',
    263: 'light-rain',
    266: 'light-rain',
    281: 'light-sleet',
    284: 'light-sleet',
    293: 'light-rain',
    296: 'light-rain',
    299: 'heavy-rain',
    302: 'heavy-rain',
    305: 'heavy-rain',
    308: 'heavy-rain',
    311: 'light-sleet',
    314: 'light-sleet',
    317: 'light-sleet',
    320: 'light-snow',
    323: 'light-snow',
    326: 'light-snow',
    329: 'heavy-snow',
    332: 'heavy-snow',
    335: 'heavy-snow',
    338: 'heavy-snow',
    350: 'light-sleet',
    353: 'light-rain',
    356: 'heavy-rain',
    359: 'heavy-rain',
    362: 'light-sleet',
    365: 'light-sleet',
    368: 'light-snow',
    371: 'heavy-snow',
    374: 'light-sleet',
    377: 'light-sleet',
    386: 'thundery',
    389: 'thundery',
    392: 'thundery-snow',
    395: 'heavy-snow',
  };
  
  return codeMap[weatherCode] || 'unknown';
};

// Get day of week from date
export const getDayOfWeek = (dateString) => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'N/A';
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

// Extract hourly forecast for a specific day
export const getHourlyForecastForDay = (weatherData, dayIndex = 0) => {
  if (!weatherData || !weatherData.weather || !weatherData.weather[dayIndex]) {
    return [];
  }
  
  return weatherData.weather[dayIndex].hourly || [];
};

// Get current conditions from weather data
export const getCurrentConditions = (weatherData) => {
  if (!weatherData || !weatherData.current_condition || !weatherData.current_condition[0]) {
    return null;
  }
  
  return weatherData.current_condition[0];
};

// Get daily forecast from weather data
export const getDailyForecast = (weatherData) => {
  if (!weatherData || !weatherData.weather) {
    return [];
  }
  
  return weatherData.weather || [];
};
