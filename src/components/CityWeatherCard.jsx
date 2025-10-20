import './CityWeatherCard.css';
import Temperature from './Temperature';

function CityWeatherCard({ data, unit }) {
  if (!data) return null;

  const desc = data.weather?.[0]?.description || "";
  const niceDesc = desc ? desc.charAt(0).toUpperCase() + desc.slice(1) : "";

  return (
    <div className="city-card">
      <div className="city-name">
        {data.name}{data.sys?.country ? `, ${data.sys.country}` : ""}
      </div>
      <div className="weather-info">
        <Temperature value={data.main?.temp} unit={unit} /> | {niceDesc}
     </div>
    </div>
  );
}

export default CityWeatherCard;
