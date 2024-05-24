import createCurrentWeatherItem from "./components/current-weather.js";
import createForecastItem from "./components/weather-forecast.js";

const city = document.querySelector(".name");

const testQuery = "Sydney";

async function getCurrentWeather(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/current-weather?q=${query}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();

    // need to handle this
    city.textContent = data.location.name;

    const icon = data.current.condition.icon;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    createCurrentWeatherItem(icon, temperature, condition);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getCurrentWeather(testQuery);

async function getForecastWeather(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/forecast-weather?q=${query}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();

    data.forecast.forecastday.forEach((item) => {
      const [year, month, day] = item.date.split("-");

      const date = `${day}/${month}`;
      const icon = item.day.condition.icon;
      const maxTemp = item.day.maxtemp_c;
      const minTemp = item.day.mintemp_c;

      createForecastItem(date, icon, maxTemp, minTemp);
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getForecastWeather(testQuery);
