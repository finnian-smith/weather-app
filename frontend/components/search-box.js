const searchBox = document.querySelector(".search-box");

function createSearchBoxItem() {
  const form = document.createElement("form");
  form.classList.add("search-form");

  const locationIcon = document.createElement("i");
  locationIcon.classList.add("fa-solid", "fa-location-dot");

  const locationInput = document.createElement("input");
  locationInput.classList.add("search-name");
  locationInput.type = "text";
  locationInput.placeholder = "Enter location";

  const locationButton = document.createElement("button");
  locationButton.classList.add("fa-solid", "fa-magnifying-glass");
  locationButton.type = "submit";

  form.appendChild(locationIcon);
  form.appendChild(locationInput);
  form.appendChild(locationButton);

  searchBox.appendChild(form);
}

export default createSearchBoxItem;
