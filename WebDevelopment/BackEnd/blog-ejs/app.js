const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const posts = [];

const homeContent = "This is a modern blog website built with Express and EJS.";

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Home",
    content: homeContent,
    posts: posts,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About",
    content: "This project is part of The Complete Web Development Bootcamp.",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "Contact",
    content: "Contact: example@email.com",
  });
});

app.get("/compose", (req, res) => {
  res.render("compose", { pageTitle: "Compose" });
});

app.post("/compose", (req, res) => {
  posts.push({
    title: req.body.postTitle,
    body: req.body.postBody,
  });
  res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
  const post = posts[req.params.id];

  res.render("post", {
    pageTitle: post.title,
    post: post,
  });
});

app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});
