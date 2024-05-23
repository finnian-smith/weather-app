import express from "express";
import fetch from "node-fetch";
import { config } from "dotenv";
import cors from "cors";

// load environment variables
config();

// initialise express app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());

app.get("/current-weather", async (req, res) => {
  const query = req.query.q;
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Weather API" });
  }
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
