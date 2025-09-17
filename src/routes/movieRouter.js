const express = require("express");

const {
  createMovieController,
  getAllMoviesController,
  updateMovieByIdController,
  deleteMovieByIdController,
  searchMovieController,
} = require("../controllers/movieController");

const router = express.Router();

router.post("/movies", createMovieController);
router.get("/movies", getAllMoviesController);
router.put("/movies/:id", updateMovieByIdController);
router.delete("/movies/:id", deleteMovieByIdController);

router.get("/movies/search", searchMovieController);

module.exports = router;
