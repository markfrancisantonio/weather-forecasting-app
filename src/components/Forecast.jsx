import { useEffect, useState } from "react";
import { fetchForecast } from "../api/weatherAPI";

function Forecast({ city, unit }) {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const getForecast = async () => {
            if (!city) return;
            const data = await fetchForecast(city);
            setForecastData(data);
        };

        getForecast();
    }, [city, unit]);

    if (!city) return <div>Search for a city to see the forecast.</div>;
    if (!forecastData) return <div>Loading forecast...</div>;

    const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0);

    return(
        <div>
            <h3>5-Day Forecast</h3>
            <div className="forecast-container">
                {dailyForecasts.map((day, index) => (
                    <div key={index} className="forecast-item">
                        <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <p>{Math.round(day.main.temp)}°{unit === "metric" ? "C" : "F"}</p>
                        <p>{day.weather[0].description}</p>
                    </div>
                ))}
            </div>
            </div>
    );
}

export default Forecast;