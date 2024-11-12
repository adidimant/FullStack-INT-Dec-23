import { useWeatherContext } from "../../Context/WeatherContext";
import { useColdMeasureContext } from "../../Context/ColdMeasuringUnit";
import { useDistanceMeasureContext } from "../../Context/DistanceUnit";
import humidity from "../../assets/humidity.svg";
import unIndex from "../../assets/uv-index.svg";
import wind from "../../assets/wind.svg";
import blackWhiteWeather from "../../assets/blackWhiteWeather.svg";
import clouds from '../../assets/clouds.svg'
import rain from '../../assets/rain.svg'

export default function AdvanceToday() {
	const { fetchedData } = useWeatherContext();
	const { coldMeasuringUnit } = useColdMeasureContext();
	const { distanceMeasureUnit } = useDistanceMeasureContext();
	const day = fetchedData?.today
	return (
		<>
			<div className="advance-day">
				<div className="left-div">
					<div className="advanced-item">
						<img className="advanced-item-icon" src={humidity} alt="" />
						<p>humidity: {day?.humidity}%</p>
					</div>
					<div className="advanced-item">
						<img className="advanced-item-icon" src={unIndex} alt="" />
						<p>uv Index: {day?.uvIndex}</p>
					</div>
					<div className="advanced-item">
						<img className="advanced-item-icon" src={wind} alt="" />
						<p>
							wind Speed:{" "}
							{distanceMeasureUnit == "km"
								? day?.windspeedKmph
								: day?.windspeedMiles}
						</p>
					</div>
				</div>
				<div className="right-div">
					<div className="advanced-item">
						<img className="advanced-item-icon" src={clouds} alt="" />
						<p>cloud cover: {day?.cloudcover}%</p>
					</div>
					<div className="advanced-item">
						<img className="advanced-item-icon" src={rain} alt="" />
						<p>chance of rain: {day?.chanceofrain}%</p>
					</div>
					<div className="advanced-item">
						<img
							className="advanced-item-icon"
							src={blackWhiteWeather}
							alt=""
						/>
						<p>
							feels like:{" "}
							{coldMeasuringUnit == "Celsius"
								? day?.FeelsLikeC
								: day?.FeelsLikeF}
							<>&#176; </>
							{coldMeasuringUnit == "Celsius" ? "C" : "F"}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
