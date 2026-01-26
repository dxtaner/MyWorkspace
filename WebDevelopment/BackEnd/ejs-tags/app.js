const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const day = new Date().getDay();

  let advice = "";

  if (day === 0 || day === 6) {
    advice = "Hafta sonu! Dinlenebilirsin 😎";
  } else {
    advice = "Hafta içi! Çalışma zamanı 💻";
  }

  res.render("index", {
    dayType: advice,
  });
});

app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});
