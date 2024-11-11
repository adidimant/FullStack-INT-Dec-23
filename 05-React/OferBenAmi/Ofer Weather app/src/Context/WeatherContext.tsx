import React, { useState,useContext, createContext } from "react"
import { ApiResFormatted } from "../types/types";

type WeatherChildrenType = {
	children: React.ReactNode;
};
type WeatherContextType = {
	fetchedData: ApiResFormatted | undefined;
	setFetchedData: (ApiResFormatted: ApiResFormatted) => void;
}


const WeatherContext = createContext<WeatherContextType | null>(null) ;

export default function WeatherProvider({children}: WeatherChildrenType) {
	const [fetchedData, setFetchedData] = useState();

    return (
        <WeatherContext.Provider value={{fetchedData, setFetchedData}}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext   = (): WeatherContextType => {
	const context = useContext(WeatherContext);
	if (context === (undefined || null)) {
		// if there is no value the hook is not being called within a function component that is rendered within a `ThemeContext`
		throw new Error("useThemeContext must be used within App");
	}
	return context;
};
