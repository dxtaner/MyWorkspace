const express = require("express");
const app = express();

// Fake database
let users = [
  { id: 1, name: "Taner", email: "taner@gmail.com" },
  { id: 2, name: "Ahmet", email: "ahmet@gmail.com" },
];

// Middleware – JSON body parse
app.use(express.json());

/* =========================
   GET – Tüm kullanıcılar
   ========================= */
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

/* =========================
   GET – ID ile kullanıcı
   ========================= */
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

/* =========================
   POST – Yeni kullanıcı
   ========================= */
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

/* =========================
   PUT – Kullanıcı güncelle
   ========================= */
app.put("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

/* =========================
   DELETE – Kullanıcı sil
   ========================= */
app.delete("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
});

/* =========================
   SERVER
   ========================= */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
