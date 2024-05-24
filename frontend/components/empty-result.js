function createEmptyResultItem() {
  const emptyData = document.createElement("div");
  emptyData.classList.add("empty-data-container");

  const emptyDataImage = document.createElement("img");
  emptyDataImage.classList.add("empty-data-image");
  emptyDataImage.src = "../frontend/icons/antenna.png";

  const emptyDataText = document.createElement("p");
  emptyDataText.classList.add("empty-data-text");
  emptyDataText.textContent = "No weather data found for the entered location";

  emptyData.appendChild(emptyDataImage);
  emptyData.appendChild(emptyDataText);

  return emptyData;
}

export default createEmptyResultItem;
