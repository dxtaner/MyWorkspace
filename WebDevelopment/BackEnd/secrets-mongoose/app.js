require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const User = require("./models/User");

const app = express();

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

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* --- ROUTES --- */
app.get("/", (req, res) => res.render("home"));

app.get("/register", (req, res) => res.render("register"));

app.post("/register", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) return res.redirect("/register");
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets");
      });
    },
  );
});

app.get("/login", (req, res) => res.render("login"));

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
);

app.get("/secrets", async (req, res) => {
  if (req.isAuthenticated()) {
    const users = await User.find({ secret: { $ne: null } });
    res.render("secrets", { users });
  } else {
    res.redirect("/login");
  }
});

app.get("/submit", (req, res) => {
  if (req.isAuthenticated()) res.render("submit");
  else res.redirect("/login");
});

app.post("/submit", async (req, res) => {
  const user = await User.findById(req.user.id);
  user.secret = req.body.secret;
  await user.save();
  res.redirect("/secrets");
});

app.get("/logout", (req, res) => {
  req.logout(() => res.redirect("/"));
});

app.listen(3000, () => console.log("Server started on port 3000"));
