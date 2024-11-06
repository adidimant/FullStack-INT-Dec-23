import { ReactNode, createContext, useState, useMemo, useContext } from "react";

type DistanceUnit = "km" | "mile";

type DistanceUnitContextType = {
	distanceMeasureUnit: DistanceUnit;
	dispatch?: (DistanceUnit: DistanceUnit) => void;
};

export const DistanceMeasureContext = createContext({
	distanceMeasureUnit: "km" as DistanceUnit,
});

function DistanceMeasuringUnitProvider({ children }: { children: ReactNode }) {
	const [distanceMeasureUnit, setdistanceMeasureUnit] = useState<DistanceUnit>("km");

	const contextData: DistanceUnitContextType = useMemo(
		() => ({
			distanceMeasureUnit,
			dispatch: setdistanceMeasureUnit,
		}),
		[distanceMeasureUnit]
	);

	return (
		<DistanceMeasureContext.Provider value={contextData}>
			{children}
		</DistanceMeasureContext.Provider>
	);
}

export default DistanceMeasuringUnitProvider;

export const useDistanceMeasureContext  = (): DistanceUnitContextType => {
	const context = useContext(DistanceMeasureContext);
	if (context === undefined) {
		// if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
		throw new Error("useThemeContext must be used within App");
	}
	return context;
};
