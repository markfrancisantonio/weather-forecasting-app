import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <h1>Weather Forecasting App</h1>
      <SearchBar />
      <WeatherDisplay />
      <Forecast />
    </div>
  );
}

export default App;
