const express = require("express");
const { accessControl } = require("./middleware.js");

const app = express();
const PORT = 4040;

const users = [
  {
    id: 1,
    name: "tnaer",
    age: 25,
  },
  {
    id: 2,
    name: "sami",
    age: 55,
  },
];

app.use(accessControl);
app.use(express.json());

app.get("/users", (req, res, next) => {
  res.json({
    data: users,
    success: true,
  });
});

app.post("/users", (req, res, next) => {
  const user = req.body;
  users.push(user);
  res.json({
    data: users,
    success: true,
  });
});

app.put("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({
    data: users,
    success: true,
  });
});

app.delete("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }
  res.json({
    data: users,
    success: true,
  });
});

app.listen(PORT, () => {
  console.log("server started port:" + PORT);
});
