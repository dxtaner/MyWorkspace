const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

const dataPath = path.join(__dirname, "data", "users.json");

const readData = () => {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

app.get("/", (req, res) => {
  res.json({ message: "REST API is running 🚀" });
});

app.get("/users", (req, res) => {
  const users = readData();
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const users = readData();
  const user = users.find((u) => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

app.post("/users", (req, res) => {
  const users = readData();

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  users.push(newUser);
  writeData(users);

  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const users = readData();
  const index = users.findIndex((u) => u.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[index] = {
    id: users[index].id,
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  writeData(users);
  res.json(users[index]);
});

app.delete("/users/:id", (req, res) => {
  let users = readData();
  users = users.filter((u) => u.id !== Number(req.params.id));

  writeData(users);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
