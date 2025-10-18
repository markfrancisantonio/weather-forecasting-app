const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

export const fetchForecast = async (city) => {
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  try {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};
