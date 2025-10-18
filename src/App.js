import { useEffect, useState, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import { fetchWeather } from "./api/weatherAPI";
import "./App.css";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");

  const handleSearch = useCallback(
    async (city) => {
      setSearchCity(city);
      const data = await fetchWeather(city, unit);
      setWeatherData(data);
    },
    [unit]
  );

  useEffect(() => {
    if (searchCity) {
      handleSearch(searchCity);
    }
  }, [unit, handleSearch, searchCity]);

  return (
    <div className="App">
      <h1>Weather Forecasting App</h1>
      <button
        onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
      >
        Switch to {unit === "metric" ? "°F" : "°C"}
      </button>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} unit={unit} />
      <Forecast city={searchCity} unit={unit} />
    </div>
  );
}

export default App;
