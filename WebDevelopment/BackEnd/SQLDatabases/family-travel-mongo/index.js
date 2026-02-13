require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("./models/User");
const Country = require("./models/Country");
const countryCodes = require("./countryCodes");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI);

// HOME
app.get("/", async (req, res) => {
  const users = await User.find();
  const countries = await Country.find().populate("userId");
  const visitedCodes = countries.map((c) => c.code);

  res.render("index", { users, countries, visitedCodes });
});

app.post("/add-user", async (req, res) => {
  await User.create({ name: req.body.name });
  res.redirect("/");
});

app.post("/add-country", async (req, res) => {
  const code = countryCodes[req.body.country];

  await Country.create({
    country: req.body.country,
    code: code,
    userId: req.body.userId,
  });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
