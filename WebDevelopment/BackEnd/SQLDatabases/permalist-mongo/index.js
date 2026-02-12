require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Task = require("./models/Task");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI);

app.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.render("index", { tasks });
});

app.post("/add", async (req, res) => {
  await Task.create({ title: req.body.task });
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  await Task.findByIdAndDelete(req.body.id);
  res.redirect("/");
});

app.post("/toggle", async (req, res) => {
  const task = await Task.findById(req.body.id);
  task.completed = !task.completed;
  await task.save();
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  await Task.findByIdAndUpdate(req.body.id, {
    title: req.body.updatedTask,
  });
  res.redirect("/");
});

app.listen(3000, () => console.log("Server started"));
