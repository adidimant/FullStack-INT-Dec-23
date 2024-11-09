import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ColdMeasuringUnitProvider from "./Context/ColdMeasuringUnit.tsx";
import DistanceMeasuringUnitProvider from "./Context/DistanceUnit.tsx";
import DataProvider from "./Context/Data.tsx";

createRoot(document.getElementById("root")!).render(
	<DataProvider>

		<ColdMeasuringUnitProvider>
			<DistanceMeasuringUnitProvider>
				<App />
			</DistanceMeasuringUnitProvider>
		</ColdMeasuringUnitProvider>
	</DataProvider>

);
