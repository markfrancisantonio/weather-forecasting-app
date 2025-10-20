import Temperature from "./Temperature";
import "./WeatherDisplay.css";

function WeatherDisplay({
  weatherData,
  unit,
  currentCity,
  setCurrentCity,
  favoriteCities,
  setFavoriteCities,
  hasSearched,
}) {
  // Before first search, show a friendly prompt
  if (!hasSearched) {
    return <div>Search for a city to see the weather.</div>;
  }

  // After a search, while waiting for the API
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  // After a search, if it failed
  if (weatherData.error) {
    return (
      <div>
        No weather data found. Please check the city name and try again.
      </div>
    );
  }

  const { name, main, weather, sys } = weatherData || {};
  const isFavorite = favoriteCities?.includes?.(name) ?? false;

  const rawDesc = weather?.[0]?.description || "";
  const niceDesc = rawDesc ? rawDesc[0].toUpperCase() + rawDesc.slice(1) : "";

  const handleFavoriteChange = () => {
    if (isFavorite) {
      setFavoriteCities?.(favoriteCities.filter((city) => city !== name));
    } else {
      setFavoriteCities?.([...favoriteCities, name]);
    }
  };

  return (
    <div className="weather-display">
     <h2>🌤️ Weather in {name}{sys?.country ? `, ${sys.country}` : ""}</h2>
      <p>
        Temperature: <Temperature value={main?.temp} unit={unit} />
      </p>
      <p>Condition: {niceDesc}</p>

      <div className="weather-actions">
  <label>
    <input
      type="checkbox"
      checked={currentCity === name}fh2
      onChange={() => setCurrentCity?.(name)}
    />
    Set as Current City
  </label>
  <label>
    <input
      type="checkbox"
      checked={isFavorite}
      onChange={handleFavoriteChange}
    />
    Add to Favorites
  </label>
</div>

    </div>
  );
}

export default WeatherDisplay;
