const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Ana Sayfa",
  });
});

app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});
