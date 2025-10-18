function WeatherDisplay({ weatherData, unit }){
    if (!weatherData) {
        return <div> No weather data to display.</div>
    }

    const { name, main, weather} = weatherData;
    return (
        <div className="weather-display">  
            <h2>Weather in {name}, {weatherData.sys.country}</h2> 
            <p>Temperature: {Math.round(main.temp)}°{unit === "metric" ? "C" : "F"}</p>    
            <p>Condition: {weather[0].description}</p>
        </div>
    );
}

export default WeatherDisplay;