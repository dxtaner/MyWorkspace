const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// ⚠️ Eğitim amaçlı (gerçekte .env kullanılır)
const API_KEY = "YOUR_API_KEY_HERE";

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": API_KEY,
      },
      params: {
        category: "success",
      },
    });

    const quote = response.data[0];

    res.render("index", {
      quote: quote,
    });
  } catch (error) {
    res.send("API Authentication Error");
  }
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
