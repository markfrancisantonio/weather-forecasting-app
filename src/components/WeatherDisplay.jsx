function WeatherDisplay({ weatherData }){
    if (!weatherData) {
        return <div> No weather data to display.</div>
    }

    const { name, main, weather} = weatherData;
    return (
        <div>  
            <h2>Weather in {name}, {weatherData.sys.country}</h2> 
            <p>Temperature: {main.temp}°C</p>    
            <p>Condition: {weather[0].description}</p>
        </div>
    );
}

export default WeatherDisplay;