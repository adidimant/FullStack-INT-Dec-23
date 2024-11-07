import axios from 'axios';

const getWeatherData = (query) => {
  return axios.get(`https://wttr.in/${query}?format=j1`);
};

export default getWeatherData;
