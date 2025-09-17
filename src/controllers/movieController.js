const {
  createMovieService,
  getAllMoviesService,
  updateMovieByIdService,
  deleteMovieByIdService,
  getMovieByTitleService,
  getMovieByDirectorService,
  getMovieByYearService,
  getMovieByGenreService,
} = require("../services/movieService");

function createMovieController(request, response) {
  try {
    const { title, director, year, genre } = request.body;

    if (!title || !director || !year || !genre) {
      return response.status(400).json({ message: "All fields are required." });
    }

    let newMovie = createMovieService(title, director, year, genre);

    return response.status(201).json(newMovie);
  } catch (error) {
    return response.status(500).json({ message: "Error creating movie." });
  }
}

function getAllMoviesController(request, response) {
  try {
    let movies = getAllMoviesService();
    return response.status(200).json(movies);
  } catch (error) {
    return response.status(500).json({ message: "Error listing movies." });
  }
}

function updateMovieByIdController(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "The id is required." });
    }

    const { title, director, year, genre } = request.body;

    let updatedMovie = updateMovieByIdService(id, title, director, year, genre);

    if (!updatedMovie) {
      return response.status(404).json({ message: "Movie not found." });
    }

    return response.status(200).json(updatedMovie);
  } catch (error) {
    return response.status(500).json({ message: "Error updating movie." });
  }
}

function deleteMovieByIdController(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "The id is required." });
    }

    let deletedMovie = deleteMovieByIdService(id);

    if (!deletedMovie) {
      return response.status(404).json({ message: "Movie not found." });
    }

    return response.status(204).end();
  } catch (error) {
    return response.status(500).json({ message: "Error deleting movie." });
  }
}

function searchMovieController(request, response) {
  try {
    const { title, director, year, genre } = request.query;

    if (title) {
      return response.status(200).json(getMovieByTitleService(title));
    }

    if (director) {
      return response.status(200).json(getMovieByDirectorService(director));
    }

    if (year) {
      return response.status(200).json(getMovieByYearService(year));
    }

    if (genre) {
      return response.status(200).json(getMovieByGenreService(genre));
    }

    return response
      .status(400)
      .json({ message: "No search parameters were valid." });
  } catch (error) {
    return response.status(500).json({ message: "Error searching movies." });
  }
}

module.exports = {
  createMovieController,
  getAllMoviesController,
  updateMovieByIdController,
  deleteMovieByIdController,
  searchMovieController,
};
