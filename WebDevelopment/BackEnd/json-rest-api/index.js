import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/users", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

  res.render("index", {
    users: data.users,
  });
});

app.get("/users/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json"));
  const user = data.users.find((u) => u.id === Number(req.params.id));

  res.render("index", { users: [user] });
});
