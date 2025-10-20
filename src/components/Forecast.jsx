import { useEffect, useState } from "react";
import { fetchForecast } from "../api/weatherAPI";
import Temperature from "./Temperature";
import "./Forecast.css";

function Forecast({ city, unit }) {
  const [forecastData, setForecastData] = useState(null);
  const [forecastError, setForecastError] = useState(false);

  useEffect(() => {
    const getForecast = async () => {
      if (!city) return;
      setForecastError(false);
      const data = await fetchForecast(city);
      if (!data || !data.list || !data.list.length) {
        setForecastError(true);
        return;
      }
      setForecastData(data);
    };

    getForecast();
  }, [city]);

  if (!city) return <div>Search for a city to see the forecast.</div>;
  if (forecastError) return <div>No forecast data available.</div>;
  if (!forecastData) return <div>Loading forecast...</div>;
  if (!forecastData.list || !forecastData.list.length) {
    return <div>No forecast data available.</div>;
  }

  const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0);

  const formatDesc = (desc) => {
    if (!desc) return "";
    return desc.charAt(0).toUpperCase() + desc.slice(1);
  };

  return (
    <div>
      <h3>🌥️ 5-Day Forecast</h3>
      <div className="forecast-container">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}</p>
            <p><Temperature value={day.main.temp} unit={unit} /></p>
            <p>{formatDesc(day.weather?.[0]?.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
