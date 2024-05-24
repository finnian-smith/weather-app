import { getCurrentWeather, getForecastWeather } from "./weather-api.js";

export function handleSearchSubmit(event) {
  event.preventDefault();
  const locationInput = document.querySelector(".search-name");
  const query = locationInput.value;
  if (query) {
    getCurrentWeather(query);
    getForecastWeather(query);
  }
}
