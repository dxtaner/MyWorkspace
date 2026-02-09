require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const quizRoutes = require("./routes/quizRoutes");

const app = express();

mongoose.connect(process.env.MONGO_URI);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "quizsecret",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use("/", quizRoutes);

app.listen(3000, () => console.log("Server started on 3000"));
