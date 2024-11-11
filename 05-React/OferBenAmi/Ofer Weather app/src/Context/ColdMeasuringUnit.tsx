import { ReactNode, createContext, useState, useMemo, useContext } from "react";

type ColdMeasuringUnit = "Celsius" | "Fahrenheit";

type coldMeasuringUnitContextType = {
	coldMeasuringUnit: ColdMeasuringUnit;
	dispatch?: (coldMeasuringUnit: ColdMeasuringUnit) => void;
};

export const ColdMeasureContext = createContext({
	coldMeasuringUnit: "Celsius" as ColdMeasuringUnit,
});

function ColdMeasuringUnitProvider({ children }: { children: ReactNode  }) {
	const [coldMeasuringUnit, setColdMeasuringUnit] = useState<ColdMeasuringUnit>("Celsius");

	const contextData: coldMeasuringUnitContextType = useMemo(
		() => ({
			coldMeasuringUnit,
			dispatch: setColdMeasuringUnit,
		}),
		[coldMeasuringUnit]
	);

	return (
		<ColdMeasureContext.Provider value={contextData}>
			{children}
		</ColdMeasureContext.Provider>
	);
}

export default ColdMeasuringUnitProvider;

export const useColdMeasureContext  = (): coldMeasuringUnitContextType => {
	const context = useContext(ColdMeasureContext);
	if (context === undefined) {
		// if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
		throw new Error("useThemeContext must be used within App");
	}
	return context;
};
