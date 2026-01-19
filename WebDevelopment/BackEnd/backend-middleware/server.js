const express = require("express");
const app = express();

// Middleware imports
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Route imports
const publicRoutes = require("./routes/publicRoutes");
const privateRoutes = require("./routes/privateRoutes");

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(loggerMiddleware);

// Routes
app.use("/", publicRoutes);
app.use("/api", privateRoutes);

// Error middleware (EN SONDA)
app.use(errorMiddleware);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
