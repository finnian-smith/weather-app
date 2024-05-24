import createSearchBoxItem from "./components/search-box.js";
import { handleSearchSubmit } from "./event-handlers.js";

createSearchBoxItem();

const searchForm = document.querySelector(".search-form");

// event listener for location
searchForm.addEventListener("submit", handleSearchSubmit);
