import { memo, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
import { useWeatherContext } from '../../context/WeatherContext2';

function Header(): ReactNode {
    const { updateArea } = useWeatherContext();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            updateArea(searchQuery);
            navigate("/");
        } else {
            updateArea('');
            navigate("/");
        }
    };

    return (
        <div className="header">
            <div className="header-left">
                <h1>World Temperatures — Weather Around The World</h1>
                <p>Weather forecast for now, next hours, and 2 following days</p>
            </div>
            <div className="header-right">
                <div className="search-container">
                <form action="/weather/" className="header-search" onSubmit={handleSubmit}>
                <input id="weather-area" type="search" autoComplete="on" className="search-input" placeholder="Search for city or place…" name="query" value={searchQuery}
                    onChange={handleInputChange}></input>
                    <button type="submit" className="search-button" title="Search">
                        &#x1F50D;
                    </button></form>
                </div>
            </div>
        </div>
    )
}

export default memo(Header);