const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();

const quizRoutes = require("./routes/quizRoutes");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "quizsecret",
    resave: false,
    saveUninitialized: true,
  }),
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

app.use("/", quizRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on http://localhost:3000");
});
