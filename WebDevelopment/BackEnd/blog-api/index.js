const express = require("express");
const bodyParser = require("body-parser");

const methodOverride = require("method-override");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

let articles = [
  {
    id: 1,
    title: "REST APIs",
    content: "REST APIs are stateless and scalable.",
  },
  {
    id: 2,
    title: "Express",
    content: "Express makes backend easy.",
  },
];

app.get("/", (req, res) => {
  res.render("home", { articles });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/articles", (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  articles.push(newArticle);
  res.redirect("/");
});

app.get("/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id == req.params.id);

  if (!article) {
    return res.send("Article not found");
  }

  res.render("article", { article });
});

app.get("/articles/:id/edit", (req, res) => {
  const article = articles.find((a) => a.id == req.params.id);
  res.render("edit", { article });
});

app.put("/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id == req.params.id);

  article.title = req.body.title;
  article.content = req.body.content;

  res.redirect("/");
});

app.delete("/articles/:id", (req, res) => {
  articles = articles.filter((a) => a.id != req.params.id);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
