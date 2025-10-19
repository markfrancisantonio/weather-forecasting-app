import Temperature from "./Temperature";

function WeatherDisplay({ weatherData, unit }){
    if (!weatherData) {
        return <div> No weather data to display.</div>
    }

    const { name, main, weather} = weatherData;
    return (
        <div className="weather-display">  
            <h2>Weather in {name}, {weatherData.sys.country}</h2> 
            <p>Temperature: <Temperature value={main.temp} unit={unit}/>
            </p>    
            <p>Condition: {weather[0].description}</p>
        </div>
    );
}

export default WeatherDisplay;