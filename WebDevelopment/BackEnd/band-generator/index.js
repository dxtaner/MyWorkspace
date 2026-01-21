import express from "express";

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS view engine
app.set("view engine", "ejs");

// GET route
app.get("/", (req, res) => {
  res.render("index");
});

// POST route
app.post("/submit", (req, res) => {
  const adjective = req.body.adjective;
  const noun = req.body.noun;

  const bandName = `${adjective} ${noun}`;

  res.render("result", { bandName });
});

// Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
