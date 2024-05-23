const forecast = document.querySelector(".weather-forecast");

function createForecastItem() {
  // forecast.textContent = "";

  const forecastItem = document.createElement("div");
  forecastItem.classList.add("forecast-item");

  const date = document.createElement("p");
  date.classList.add("forecast-date");

  const image = document.createElement("img");
  image.classList.add("forecast-icon");

  const temperature = document.createElement("p");
  temperature.classList.add("forecast-temperature");

  const condition = document.createElement("p");
  condition.classList.add("forecast-condition");

  forecastItem.appendChild(date);
  forecastItem.appendChild(image);
  forecastItem.appendChild(temperature);
  forecastItem.appendChild(condition);

  forecast.appendChild(forecastItem);
}

export default createForecastItem;
