// controllers/moviesController.js
const mongodb = require("mongodb");

const validate = (data) => {
  let errors = {};
  if (data.title === "") errors.title = "Can't be empty";
  if (data.cover === "") errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

// GET all movies
const getAllMovies = async (db, req, res) => {
  try {
    const movies = await db.collection("movies").find({}).toArray();
    res.json({ success: true, movies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: { global: "Something went wrong" } });
  }
};

// POST a new movie
const createMovie = async (db, req, res) => {
  try {
    const { errors, isValid } = validate(req.body);

    if (isValid) {
      const { title, cover } = req.body;

      const existingMovie = await db.collection("movies").findOne({ title });

      if (existingMovie) {
        return res.status(400).json({
          success: false,
          errors: { title: "Movie with this title already exists" },
        });
      }

      // If the movie with the same title doesn't exist, insert the new movie
      const result = await db.collection("movies").insertOne({ title, cover });

      const insertedMovie = {
        _id: result.insertedId,
        title,
        cover,
      };

      return res.json({ success: true, movie: insertedMovie });
    } else {
      return res.status(400).json({ success: false, errors });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, errors: { global: "Something went wrong" } });
  }
};

// PUT (update) a movie by ID
const updateMovie = async (db, req, res) => {
  try {
    const { errors, isValid } = validate(req.body);

    if (isValid) {
      const { title, cover } = req.body;
      const updatedMovie = await db
        .collection("movies")
        .findOneAndUpdate(
          { _id: new mongodb.ObjectId(req.params._id) },
          { $set: { title, cover } },
          { returnDocument: "after" }
        );

      if (updatedMovie) {
        res.json({ success: true, movie: updatedMovie });
      } else {
        res
          .status(404)
          .json({ success: false, errors: { global: "Movie not found" } });
      }
    } else {
      res.status(400).json({ success: false, errors });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, errors: { global: "Something went wrong" } });
  }
};

// GET a movie by ID
const getMovieById = async (db, req, res) => {
  try {
    const movie = await db
      .collection("movies")
      .findOne({ _id: new mongodb.ObjectId(req.params._id) });

    if (movie) {
      res.json({ success: true, movie });
    } else {
      res
        .status(404)
        .json({ success: false, errors: { global: "Movie not found" } });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, errors: { global: "Something went wrong" } });
  }
};

// DELETE a movie by ID
const deleteMovieById = async (db, req, res) => {
  try {
    const result = await db
      .collection("movies")
      .deleteOne({ _id: new mongodb.ObjectId(req.params._id) });

    if (result.deletedCount === 1) {
      res.json({ success: true, message: "Movie deleted successfully" });
    } else {
      res
        .status(404)
        .json({ success: false, errors: { global: "Movie not found" } });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, errors: { global: "Something went wrong" } });
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  getMovieById,
  deleteMovieById,
};
