const city = document.querySelector(".location-name");
const temperature = document.querySelector(".location-temperature");
const icon = document.querySelector("img");
const condition = document.querySelector(".location-condition");

async function getWeather(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/current-weather?q=${query}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();

    city.textContent = data.location.name;
    temperature.textContent = data.current.temp_c + "°C";
    icon.src = data.current.condition.icon;
    condition.textContent = data.current.condition.text;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

getWeather("DUB");
