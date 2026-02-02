const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let articles = [
  {
    id: 1,
    title: "REST APIs",
    content: "REST APIs are stateless.",
  },
  {
    id: 2,
    title: "Express",
    content: "Express is a Node.js framework.",
  },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.get("/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  res.json(article);
});

app.post("/articles", (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  articles.push(newArticle);

  res.status(201).json(newArticle);
});

app.put("/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  article.title = req.body.title;
  article.content = req.body.content;

  res.json(article);
});

app.patch("/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  if (req.body.title) {
    article.title = req.body.title;
  }

  if (req.body.content) {
    article.content = req.body.content;
  }

  res.json(article);
});

app.delete("/articles/:id", (req, res) => {
  const articleExists = articles.some((a) => a.id == req.params.id);

  if (!articleExists) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  articles = articles.filter((a) => a.id != req.params.id);

  res.json({
    message: "Article deleted",
  });
});

app.delete("/articles", (req, res) => {
  articles = [];
  res.json({
    message: "All articles deleted",
  });
});

app.listen(PORT, () => {
  console.log(`DIY REST API running on http://localhost:${PORT}`);
});
