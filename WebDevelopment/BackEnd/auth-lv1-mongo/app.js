require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/User");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => res.render("home"));

app.get("/register", (req, res) => res.render("register"));

app.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  await User.create({
    email: req.body.email,
    password: hash,
  });

  res.redirect("/login");
});

app.get("/login", (req, res) => res.render("login"));

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) return res.redirect("/secrets");
  }

  res.send("Invalid credentials");
});

app.get("/secrets", (req, res) => {
  res.render("secrets");
});

app.listen(3000, () => console.log("Server started"));
