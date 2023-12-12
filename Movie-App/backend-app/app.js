// app.js
const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const moviesController = require("./controllers/moviesController.js");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}`;

const externalDataFilePath = path.join(__dirname, "movieData.json");

// MongoDB Connection and Initialization
(async () => {
  try {
    const client = await mongodb.MongoClient.connect(dbUrl, {});
    const db = client.db(process.env.DB_NAME);

    // Check if there are no movies in the database
    const moviesCount = await db.collection("movies").countDocuments();

    if (moviesCount === 0) {
      // Read movie data from the external JSON file
      const externalData = JSON.parse(
        fs.readFileSync(externalDataFilePath, "utf8")
      );

      // Insert multiple documents
      // await db.collection("movies").insertMany(externalData);

      console.log("Inserted movies from external data.");
    } else {
      console.log("Movies already exist in the database.");
    }

    // Define Express routes
    app.get("/api/movies", async (req, res) => {
      await moviesController.getAllMovies(db, req, res);
    });

    app.post("/api/movies", async (req, res) => {
      await moviesController.createMovie(db, req, res);
    });

    app.put("/api/movies/:_id", async (req, res) => {
      await moviesController.updateMovie(db, req, res);
    });

    app.get("/api/movies/:_id", async (req, res) => {
      await moviesController.getMovieById(db, req, res);
    });

    app.delete("/api/movies/:_id", async (req, res) => {
      await moviesController.deleteMovieById(db, req, res);
    });

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ errors: { global: "Something went wrong" } });
    });

    app.listen(process.env.PORT, () =>
      console.log("Server is running on localhost:3033")
    );
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
})();
