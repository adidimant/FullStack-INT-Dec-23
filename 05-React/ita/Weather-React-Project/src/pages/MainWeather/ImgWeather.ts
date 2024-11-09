import cloudy from "../../assets/WeatherIcon/cloudy.png"
import PartlyCloudy from "../../assets/WeatherIcon/PartlyCloudy.png";
import rain from "../../assets/WeatherIcon/rain.png";
import snow from "../../assets/WeatherIcon/snow.png";
import Spirits from "../../assets/WeatherIcon/Spirits.png";
import sun from "../../assets/WeatherIcon/sun.png";
import thunder from "../../assets/WeatherIcon/thunder.png"

function getWeatherImg(value: string) {
    const valueWeather = value.toLowerCase();

    if (valueWeather.includes('sunny')) return sun;
    if (valueWeather.includes('snow')) return snow;
    if (valueWeather.includes('clear')) return sun;
    if (valueWeather.includes('partly Cloudy')) return PartlyCloudy;
    if (valueWeather.includes('thunder')) return thunder;
    if (valueWeather.includes('rain')) return rain;
    if (valueWeather.includes('cloudy')) return sun;
    if (valueWeather.includes('spirits')) return Spirits;
    if (valueWeather.includes('שמשי')) return sun;
    if (valueWeather.includes('שלג')) return snow;
    if (valueWeather.includes('בהיר')) return sun;
    if (valueWeather.includes('מעונן חלקית')) return PartlyCloudy;
    if (valueWeather.includes('גשם')) return rain;
    if (valueWeather.includes('מעונן')) return sun;
    if (valueWeather.includes('רעמים')) return Spirits;
    return cloudy
}

export default getWeatherImg;