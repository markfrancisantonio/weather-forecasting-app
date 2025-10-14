import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";

function App() {
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = (city) => {
    setSearchCity(city);
    console.log("User searched:", city); // for testing
  };
  return (
    <div className="App">
      <h1>Weather Forecasting App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={searchCity} />
      <Forecast city={searchCity} />
    </div>
  );
}

export default App;
