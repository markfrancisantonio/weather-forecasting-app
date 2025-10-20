import { useEffect, useState, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import { fetchWeather } from "./api/weatherAPI";
import FavoriteCities from "./components/FavoriteCities";
import CityWeatherCard from "./components/CityWeatherCard";
import "./App.css";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [hasSearched, setHasSearched] = useState(false);

  const [currentCity, setCurrentCity] = useState("");
  const [currentCityWeather, setCurrentCityWeather] = useState(null);

  const [favoriteCities, setFavoriteCities] = useState([]);
  const [favoriteWeatherData, setFavoriteWeatherData] = useState([]);

  const handleSearch = useCallback(
    async (city) => {
      setSearchCity(city);
      setHasSearched(true);
      const data = await fetchWeather(city, unit);
      if (!data) {
        setWeatherData({ error: true });
      } else {
        setWeatherData(data);
      }
    },
    [unit]
  );

  const handleSetCurrentCity = useCallback(
    async (city) => {
      setCurrentCity(city);
      setCurrentCityWeather(null);
      const data = await fetchWeather(city, unit);
      setCurrentCityWeather(data || { error: true });
    },
    [unit]
  );

  const fetchFavoriteWeather = useCallback(async () => {
    const dataArray = await Promise.all(
      favoriteCities.map((city) => fetchWeather(city, unit))
    );
    setFavoriteWeatherData(dataArray.filter(Boolean));
  }, [favoriteCities, unit]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (searchCity) handleSearch(searchCity);
  }, [searchCity]);

  useEffect(() => {
    if (favoriteCities.length > 0) {
      fetchFavoriteWeather();
    } else {
      setFavoriteWeatherData([]);
    }
  }, [favoriteCities, unit, fetchFavoriteWeather]);

  return (
    <div className="app-container">
      <h1>Weather Forecasting App</h1>

      <div className="controls">
        <SearchBar onSearch={handleSearch} />

        <div className="unit-toggle">
          <span className={`unit-option ${unit === "metric" ? "active" : ""}`}>
            °C
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={unit === "imperial"}
              onChange={() =>
                setUnit(unit === "metric" ? "imperial" : "metric")
              }
            />
            <span className="slider round"></span>
          </label>
          <span
            className={`unit-option ${unit === "imperial" ? "active" : ""}`}
          >
            °F
          </span>
        </div>
      </div>

      <WeatherDisplay
        weatherData={weatherData}
        unit={unit}
        currentCity={currentCity}
        setCurrentCity={handleSetCurrentCity}
        favoriteCities={favoriteCities}
        setFavoriteCities={setFavoriteCities}
        hasSearched={hasSearched}
      />

      <hr className="section-divider" />

      <Forecast city={searchCity} unit={unit} />

      {currentCityWeather && !currentCityWeather.error && (
        <div className="current-city-container">
          <div className="current-city-header">
            <h3>🏠 My Current City</h3>
          </div>
          <CityWeatherCard data={currentCityWeather} unit={unit} />
        </div>
      )}
      {favoriteWeatherData.length > 0 && (
        <FavoriteCities favoriteWeatherData={favoriteWeatherData} unit={unit} />
      )}
    </div>
  );
}

export default App;
