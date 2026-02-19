require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

const User = require("./models/User");

const app = express();
const saltRounds = 12;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

/* -------- ROUTES -------- */

app.get("/", (req, res) => res.render("home"));

app.get("/register", (req, res) => res.render("register"));

app.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, saltRounds);

  await User.create({
    email: req.body.email,
    password: hash,
  });

  res.redirect("/login");
});

app.get("/login", (req, res) => res.render("login"));

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(req.body.password, user.password);

  if (match) {
    req.session.userId = user._id;
    res.redirect("/secrets");
  } else {
    res.send("Wrong password");
  }
});

// 🔐 PROTECTED ROUTE
app.get("/secrets", (req, res) => {
  if (req.session.userId) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});

// 🚪 LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(3000, () => console.log("Server started on 3000"));
