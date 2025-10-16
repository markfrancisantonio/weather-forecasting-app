import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import { fetchWeather } from "./api/weatherAPI";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    setSearchCity(city);
    console.log("User searched:", city);

    const data = await fetchWeather(city);
    setWeatherData(data);
    console.log("Fetched weather data:", data);
  };

  return (
    <div className="App">
      <h1>Weather Forecasting App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay data={weatherData} />
      <Forecast city={searchCity} />
    </div>
  );
}

export default App;
