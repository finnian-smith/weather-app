const forecast = document.querySelector(".weather-forecast");

function createForecastItem(date, icon, maxTemp, minTemp) {
  // forecast.textContent = "";

  const forecastItem = document.createElement("div");
  forecastItem.classList.add("forecast-item");

  const forecastDate = document.createElement("p");
  forecastDate.classList.add("forecast-date");
  forecastDate.textContent = date;

  const forecastIcon = document.createElement("img");
  forecastIcon.classList.add("forecast-icon");
  forecastIcon.src = icon;

  const forecastMaxTemp = document.createElement("p");
  forecastMaxTemp.classList.add("forecast-max-temperature");
  forecastMaxTemp.textContent = "H: " + maxTemp + "°";

  const forecastMinTemp = document.createElement("p");
  forecastMinTemp.classList.add("forecast-min-temperature");
  forecastMinTemp.textContent = "L: " + minTemp + "°";

  forecastItem.appendChild(forecastDate);
  forecastItem.appendChild(forecastIcon);
  forecastItem.appendChild(forecastMaxTemp);
  forecastItem.appendChild(forecastMinTemp);

  forecast.appendChild(forecastItem);
}

export default createForecastItem;
