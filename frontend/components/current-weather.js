const currentWeather = document.querySelector(".weather-information");

function createCurrentWeatherItem(icon, temperature, condition) {
  // currentWeather.textContent = "";

  //   const currentWeather = document.createElement("div");
  //   currentWeather.classList.add("forecast-item");

  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("weather-icon");
  weatherIcon.src = icon;

  const weatherTemp = document.createElement("p");
  weatherTemp.classList.add("weather-temperature");
  weatherTemp.textContent = temperature + "°";

  const weatherCondition = document.createElement("p");
  weatherCondition.classList.add("weather-condition");
  weatherCondition.textContent = condition;

  currentWeather.appendChild(weatherIcon);
  currentWeather.appendChild(weatherTemp);
  currentWeather.appendChild(weatherCondition);
}

export default createCurrentWeatherItem;
