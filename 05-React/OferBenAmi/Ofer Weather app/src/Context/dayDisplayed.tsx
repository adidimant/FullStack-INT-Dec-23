import { ReactNode, createContext, useState, useMemo, useContext } from "react";
import { DayDisplayed } from "../types/types";

type dayDisplayedType = {
	dayDisplayed: DayDisplayed;
	dispatch?: (DayDisplayed: DayDisplayed) => void;
};

export const dayDisplayedContext = createContext({
	dayDisplayed: "Today" as DayDisplayed,
});

function DayDisplayedProvider({ children }: { children: ReactNode  }) {
	const [dayDisplayed, setDayDisplayed] = useState<DayDisplayed>("Today");

	const contextData: dayDisplayedType = useMemo(
		() => ({
			dayDisplayed,
			dispatch: setDayDisplayed,
		}),
		[dayDisplayed]
	);

	return (
		<dayDisplayedContext.Provider value={contextData}>
			{children}
		</dayDisplayedContext.Provider>
	);
}

export default DayDisplayedProvider;

export const useDayDisplayedContext  = (): dayDisplayedType => {
	const context = useContext(dayDisplayedContext);
	if (context === undefined) {
		// if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
		throw new Error("useThemeContext must be used within App");
	}
	return context;
};
