import { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === "") return; //ignore empty input
        onSearch(city); // pass the city to parent
        setCity(""); // clear input after search
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Enter city name" 
            value={city}
            onChange={(e)=> setCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
      
    );
}

export default SearchBar;