import { ReactNode, createContext, useState, useMemo, useContext } from "react";
import { ApiResFormatted } from "../types/types";

type WeatherDataContextType = {
	fetchedData: ApiResFormatted;
	dispatch?: (fetchedData: ApiResFormatted) => void;
};

export const DataContext = createContext({
	fetchedData: null as ApiResFormatted | null,
});

function DataProvider({ children }: { children: ReactNode }) {
	const [fetchedData, setFetchedData] = useState<ApiResFormatted>();

	//TODO - fiX This!!
	const contextData: WeatherDataContextType = useMemo(
		() => ({
			fetchedData,
			dispatch: setFetchedData,
		}),
		[fetchedData]
	);

	return (
		<DataContext.Provider value={contextData}>
			{children}
		</DataContext.Provider>
	);
}

export default DataProvider;

export const useColdMeasureContext  = (): WeatherDataContextType | null => {
	const context = useContext(DataContext);
	if (context === undefined) {
		// if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
		throw new Error("useThemeContext must be used within App");
	}
	return context;
};
