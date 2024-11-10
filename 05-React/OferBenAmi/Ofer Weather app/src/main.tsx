import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ColdMeasuringUnitProvider from "./Context/ColdMeasuringUnit.tsx";
import DistanceMeasuringUnitProvider from "./Context/DistanceUnit.tsx";
import WeatherProvider from "./Context/WeatherContext.tsx";

createRoot(document.getElementById("root")!).render(
	<WeatherProvider>
		<ColdMeasuringUnitProvider>
			<DistanceMeasuringUnitProvider>
				<App />
			</DistanceMeasuringUnitProvider>
		</ColdMeasuringUnitProvider>
	</WeatherProvider>



);
