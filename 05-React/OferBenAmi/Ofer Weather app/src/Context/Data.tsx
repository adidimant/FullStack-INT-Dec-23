import { ReactNode, createContext, useState, useMemo, useContext, useCallback } from "react";
import { ApiResFormatted, days } from "../types/types";
import axios from "axios";

type WeatherDataContextType = {
	fetchedData: ApiResFormatted ;
	dispatch?: (fetchedData: ApiResFormatted) => void;
};

export const DataContext = createContext({
	fetchedData: null as ApiResFormatted | null,
});

function DataProvider({ children }: { children: ReactNode }) {
	const [fetchedData, setFetchedData] = useState<ApiResFormatted>();


	const fetchData = useCallback(async (inputCity: string) => {
		try {
			const fetchData = await axios.get(
				`https://wttr.in/${inputCity}?format=j1`
			);
			const fetchedDateFormatted: ApiResFormatted = {
				today: {
					date: fetchData.data.weather[days.today].date,
					avgtempC: fetchData.data.weather[days.today].avgtempC,
					avgtempF: fetchData.data.weather[days.today].avgtempC,
				},
				tomorrow: {
					date: fetchData.data.weather[days.tomorrow].date,
					avgtempC: fetchData.data.weather[days.tomorrow].avgtempC,
					avgtempF: fetchData.data.weather[days.tomorrow].avgtempC,
				},
				in2Days: {
					date: fetchData.data.weather[days.in2Days].date,
					avgtempC: fetchData.data.weather[days.in2Days].avgtempC,
					avgtempF: fetchData.data.weather[days.in2Days].avgtempC,
				},
				country: fetchData.data.nearest_area[0].country[0].value,
				city: fetchData.data.nearest_area[0].areaName[0].value
			};
			if (inputCity == "") {
				setFetchedData(fetchedDateFormatted)
			}

			// setFetchedData(fetchedDateFormatted);
			// setCity(nearestArea);
			setFetchedData(fetchedDateFormatted)
			return fetchedDateFormatted;
		} catch (err) {
			//TODO - Update UI when the server throws an error!!
			console.log(`eroprrrr oferrrrr`);
			console.error(err);
		}
	}, []);
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
