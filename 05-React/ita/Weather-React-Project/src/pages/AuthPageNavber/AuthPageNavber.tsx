import { memo, useCallback, useState } from "react";
import { useWeatherContext } from "../../context/data-weather-context";
import "./AuthPageNavber.css";
import ButtonTempContext from "./component/Button-temp-context/ButtonTempContext";
import '@geoapify/geocoder-autocomplete/styles/minimal-dark.css';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext
} from '@geoapify/react-geocoder-autocomplete';

function AuthPageNavber() {
    
    const { fetchWeatherData } = useWeatherContext();

    const handleGeoapifyChange = (value: { properties: { city?: string; name: string } }) => {
        const cityName = value.properties.city || value.properties.name; 
        fetchWeatherData(cityName); 
    };

    return (
        <div className="navbarContainer">
            <div style={{ width:"192px" }}><ButtonTempContext /></div>

            <div className="geoapify-autocomplete-wrapper">
            <GeoapifyContext apiKey="889def3c00a1471daa5b94c70b5b9fee">
                <GeoapifyGeocoderAutocomplete
                placeholder="Enter address here"
                type="city"
                lang="en"
                placeSelect={handleGeoapifyChange}
                />
            </GeoapifyContext>
            </div>

            <div className="weatherText">WEATHER</div>


            
        </div>
    );
}

export default memo(AuthPageNavber);
