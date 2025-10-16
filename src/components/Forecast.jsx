function Forecast({ forecastData }){
    if (!forecastData){
        return <div>No frecast data to display.</div>
    }
    return(
        <div>
            <h2>Forecast</h2>
            {/* will loop through forecastData later */}
            </div>
    );
}

export default Forecast;