import { memo, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Utils from "../../../Utils/Utils";
import { useWeatherContext } from "../../../contexts/Weather-Context";
import './Search.css';
import axios from "axios";
import { WeatherType } from "../../../types/types";
import { useThemeContext } from "../../../contexts/theme-context";

const getLocation = async (): Promise<string | null> => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (res, rej) => {
        try {
            const result: string | null = await Utils.getUserLocation();
            if (result) {
                res(result);
            }
            res(null);
        } catch (err) {
            rej('Error => '+err);
        }
    });
};

function Search(): ReactNode {
    const [countriesArray, setCountriesArray] = useState<string[]>([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const { dispatch } = useWeatherContext();
    const firstLoad = useRef<boolean>(true);
    const { theme }= useThemeContext();
   
    const getData = useCallback(async () => {
        if (selectedValue) {
            const url = `https://wttr.in/${selectedValue}?format=j1`;
            try {
                const response = await axios.get(url);
                const data: WeatherType = response.data;

                if (data.nearest_area) {
                    const area: string = (data.nearest_area[0]?.areaName as unknown as { value: string }[])?.[0]?.value;
                    if (area && !area.includes('Ban Not')) {
                        dispatch(data);

                        // Check if the selected value is already in local storage, add if not
                        if (!countriesArray.includes(selectedValue)) {
                            const updatedCountries = [...countriesArray.reverse(), selectedValue];
                            setCountriesArray(updatedCountries.reverse());
                            localStorage.setItem("countriesArray", JSON.stringify(updatedCountries));
                        }
                    } else {
                        alert('No data found, please try again');
                    }
                } else {
                    console.error('Incorrect data format,', data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response && error.response.status === 404) {
                        alert('Data not found for the selected location.');
                    } else {
                        console.error("Error fetching data:", error.message);
                    }
                } else {
                    console.error("An unexpected error occurred:", error);
                }
            }
        }
    }, [countriesArray, dispatch, selectedValue]);
    
    useEffect(() => {
        // Retrieve countries array from local storage or initialize with an empty array
        try {
            const storedCountries: Array<string> = JSON.parse(localStorage.getItem("countriesArray") || "[]");
            setCountriesArray(storedCountries.reverse());
            getLocation().then((location) => {
                if (location ) {
                    setSelectedValue(location);
                }
            });  
        } catch (error) {
            console.error(error);
        }
        
    }, []);
    
    useEffect(() => {
        // Run getData only once after selectedValue is set by getUserLocation (in first render)
        if (selectedValue && firstLoad.current) {
            firstLoad.current = false;
            getData();
        }
    }, [selectedValue, getData]);
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedValue(value);   
        // Filter options based on the input value
        const filtered = countriesArray.filter(option =>
            option.toLowerCase().includes(value.toLowerCase())
        );      
        setFilteredOptions(filtered);
        setIsDropdownOpen(true); // Keep dropdown open as you type
    };

    const handleInputClick = () => {
        // Toggle dropdown if there are filtered options, even if the input is empty
        if (!isDropdownOpen && countriesArray.length > 0) {
            setFilteredOptions(countriesArray);
            setIsDropdownOpen(true);
        } else {
            setIsDropdownOpen(false);
        }
    };

    const handleOptionClick = useCallback( (option: string) => {
        setSelectedValue(option);
    },[]);
    
    const btnClick = useCallback(() => {
        if (selectedValue) {
            getData();
        } else {
            alert("Please enter a location before clicking GO.");
        }
    }, [getData, selectedValue]);

    return (
        <div className={`searchBar`}>
            <input
                id="input"
                className={`input ${theme}`}
                value={selectedValue}
                onChange={handleChange}
                placeholder="Search for a city or country"
                onBlur={() => setIsDropdownOpen(false)} // Close dropdown on blur
                onClick={handleInputClick}
            />
            <button className={`btnGo ${theme}`} onClick={btnClick}>GO</button>
            {isDropdownOpen && filteredOptions.length > 0 && (
                <div className="dropdown">
                    {filteredOptions.map((option, index) => (
                        <div 
                            key={index} 
                            className="dropdown-option" 
                            onMouseDown={() => handleOptionClick(option)} // Use onMouseDown to prevent blur
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default memo(Search);
