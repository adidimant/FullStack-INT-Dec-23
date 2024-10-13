import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ColdMeasuringUnitProvider from "./Context/ColdMeasuringUnit.tsx";
import DistanceMeasuringUnitProvider from "./Context/DistanceUnit.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ColdMeasuringUnitProvider>
		<DistanceMeasuringUnitProvider>

			<App />
		</DistanceMeasuringUnitProvider>

		</ColdMeasuringUnitProvider>
	</StrictMode>
);
