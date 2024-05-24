import createSearchBoxItem from "./components/search-box.js";
import { loadDemo, handleSearchSubmit } from "./event-handlers.js";

createSearchBoxItem();

loadDemo();

const searchForm = document.querySelector(".search-form");

// event listener for location
searchForm.addEventListener("submit", handleSearchSubmit);
