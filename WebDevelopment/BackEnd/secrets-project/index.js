require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

const User = require("./models/User");
const Secret = require("./models/Secret");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });

  await user.save();
  req.session.userId = user._id;
  res.redirect("/secrets");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    req.session.userId = user._id;
    res.redirect("/secrets");
  } else {
    res.redirect("/login");
  }
});

app.get("/secrets", async (req, res) => {
  if (!req.session.userId) return res.redirect("/login");

  const secrets = await Secret.find();
  res.render("secrets", { secrets });
});

app.post("/submit", async (req, res) => {
  if (!req.session.userId) return res.redirect("/login");

  await Secret.create({
    content: req.body.secret,
    userId: req.session.userId,
  });

  res.redirect("/secrets");
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
