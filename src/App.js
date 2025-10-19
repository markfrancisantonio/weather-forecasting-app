import { useEffect, useState, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import { fetchWeather } from "./api/weatherAPI";
import "./App.css";
import Button from "./components/Button";

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
      <div className="controls">
        <SearchBar onSearch={handleSearch} />
        <Button
          className="custom-btn"
          onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
        >
          Switch to {unit === "metric" ? "°F" : "°C"}
        </Button>
      </div>
      <WeatherDisplay weatherData={weatherData} unit={unit} />
      <Forecast city={searchCity} unit={unit} />
    </div>
  );
}

export default App;
