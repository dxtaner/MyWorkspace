require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const SECRET = process.env.SECRET_KEY;

console.log("Secret key:", SECRET);

mongoose.connect(MONGO_URI).then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => {
  res.send("Environment Variables Demo");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
