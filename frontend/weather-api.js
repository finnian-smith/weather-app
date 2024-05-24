import createCurrentWeatherItem from "./components/current-weather.js";
import createForecastItem from "./components/weather-forecast.js";
import { getCustomIcon } from "../frontend/weather-icons.js";

const weatherInformation = document.querySelector(".weather-information");
const weatherForecast = document.querySelector(".weather-forecast");

// get current weather
export async function getCurrentWeather(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/current-weather?q=${query}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();

    weatherInformation.innerHTML = "";

    if (data.error) {
      weatherInformation.innerHTML =
        "<p>No weather data found for the entered location</p>";
      return;
    }

    const icon = getCustomIcon(data.current.condition.code);
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    createCurrentWeatherItem(icon, temperature, condition);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// get forecast weather
export async function getForecastWeather(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/forecast-weather?q=${query}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();

    weatherForecast.innerHTML = "";

    if (data.error) {
      return;
    }

    data.forecast.forecastday.forEach((item) => {
      const [year, month, day] = item.date.split("-");

      const date = `${day}/${month}`;
      const icon = getCustomIcon(item.day.condition.code);
      const maxTemp = item.day.maxtemp_c;
      const minTemp = item.day.mintemp_c;

      createForecastItem(date, icon, maxTemp, minTemp);
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
