import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ColdMeasuringUnitProvider from "./Context/ColdMeasuringUnit.tsx";
import DistanceMeasuringUnitProvider from "./Context/DistanceUnit.tsx";
import WeatherProvider from "./Context/WeatherContext.tsx";
import DayDisplayedProvider from "./Context/dayDisplayed.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<WeatherProvider>
		<DayDisplayedProvider>
			<ColdMeasuringUnitProvider>
				<DistanceMeasuringUnitProvider>
					<App />
				</DistanceMeasuringUnitProvider>
			</ColdMeasuringUnitProvider>
		</DayDisplayedProvider>
	</WeatherProvider>
);
