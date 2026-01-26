const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date().getDay();

  let message = "";

  if (today === 0 || today === 6) {
    message = "Hafta sonu! Dinlenebilirsin 😎";
  } else {
    message = "Hafta içi! Çalışma zamanı 💻";
  }

  res.render("index", {
    advice: message,
    day: today,
  });
});

app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});
