require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const businessRoutes = require("./routes/businessRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const businessImageRoutes = require("./routes/businessImageRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/businesses", businessRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/business-images", businessImageRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
