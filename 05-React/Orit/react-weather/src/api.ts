import WeatherApiResponse, { TimeApiResponse } from "./types/types";

export const fetchWeatherData = async ( id: string, setError: React.Dispatch<React.SetStateAction<string | null>> ): Promise<WeatherApiResponse> => {
    //const url = 'https://wttr.in/' + id + '?format=j1'
    const result: Response = await fetch(`https://wttr.in/${id}?format=j1`);
    if (result.status === 404) {
        const errorData: WeatherApiResponse = await result.json();
        setError(`'${id}' was not found`);
        return errorData;
    }
    if (!result.ok) {
        throw new Error('Failed to fetch weather data');
    }

    return await result.json();
};

export const fetchTimeData = async ( latitude: string, longitude: string, setError: React.Dispatch<React.SetStateAction<string | null>> ): Promise<TimeApiResponse> => {
    const result: Response = await fetch(`https://timeapi.io/api/time/current/coordinate?latitude=${latitude}&longitude=${longitude}`);
    if (result.status === 404) {
        const errorData: TimeApiResponse = await result.json();
        setError(`The location was not found`);
        return errorData;
    }
    if (!result.ok) {
        throw new Error('Failed to fetch time data');
    }

    return await result.json();
};
