const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/check", (req, res) => {
  const password = req.body.password;

  if (password === "ILOVEYOU") {
    res.sendFile(path.join(__dirname, "views", "secret.html"));
  } else {
    res.send("<h1>Access Denied ❌</h1>");
  }
});

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
