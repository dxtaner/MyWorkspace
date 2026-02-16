require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Book = require("./models/Book");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo Connected"));

app.get("/", async (req, res) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "dateRead";

  const books = await Book.find({
    title: { $regex: search, $options: "i" },
  }).sort({ [sort]: -1 });

  res.render("index", { books, search });
});

app.get("/add", (req, res) => res.render("add"));

app.post("/add", async (req, res) => {
  const { title, author, rating, notes } = req.body;

  await Book.create({
    title,
    author,
    rating,
    notes,
    coverId: title.replace(/ /g, "+"),
  });

  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("edit", { book });
});

app.put("/edit/:id", async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

app.delete("/delete/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server started"));
