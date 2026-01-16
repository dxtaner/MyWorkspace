const express = require("express");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger);

// Routes
app.use("/users", userRoutes);

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
