import { useState } from "react";
import Button from "./Button";
import './SearchBar.css';


function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== "") {
        onSearch(city); 
    }
    };

    return (
        <form onSubmit={handleSubmit} className="search-section">
            <input 
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            />
            <Button type="submit" className="search-btn">Search</Button>
        </form>
      
    );
}

export default SearchBar;