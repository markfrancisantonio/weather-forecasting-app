import CityWeatherCard from './CityWeatherCard';
import './FavoriteCities.css';

function FavoriteCities({ favoriteWeatherData = [], unit }) {
        if (!favoriteWeatherData.length) return null;
        return (
       <div className="favorite-cities-container">
            <h3>Favorite Cities</h3>
            <div className="favorite-cities-list">
                {favoriteWeatherData.map((cityData, index) => (
                    <CityWeatherCard key={index} data={cityData} unit={unit} />
                ))}
            </div>
        </div>
    );
}

export default FavoriteCities;
