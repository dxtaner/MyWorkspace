const express = require("express");
const app = express();

// Static dosyalar (CSS, img, js)
app.use(express.static("public"));

// EJS ayarı
app.set("view engine", "ejs");

// Ana sayfa
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Ana Sayfa",
    userName: "Taner",
  });
});

// About sayfası
app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "Hakkımda",
  });
});

app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});
