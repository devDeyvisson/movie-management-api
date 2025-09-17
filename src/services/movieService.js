const {
  createMovie,
  updateMovieById,
  getAllMovies,
  deleteMovieById,
  findById,
  getMovieByTitle,
  getMovieByDirector,
  getMovieByYear,
  getMovieByGenre,
} = require("../repositories/movieRepository");

function createMovieService(title, director, year, genre) {
  let movie = {
    id: Date.now().toString(),
    title: title,
    director: director,
    year: year,
    genre: genre,
  };

  return createMovie(movie);
}

function getAllMoviesService() {
  return getAllMovies();
}

function updateMovieByIdService(id, title, director, year, genre) {
  let movieFound = findById(id);

  if (!movieFound) return null;

  movieFound.title = title || movieFound.title;
  movieFound.director = director || movieFound.director;
  movieFound.year = year || movieFound.year;
  movieFound.genre = genre || movieFound.genre;

  return updateMovieById(id, movieFound);
}

function deleteMovieByIdService(id) {
  return deleteMovieById(id);
}

function getMovieByTitleService(title) {
  return getMovieByTitle(title);
}

function getMovieByDirectorService(director) {
  return getMovieByDirector(director);
}

function getMovieByYearService(year) {
  return getMovieByYear(year);
}

function getMovieByGenreService(genre) {
  return getMovieByGenre(genre);
}

module.exports = {
  createMovieService,
  getAllMoviesService,
  updateMovieByIdService,
  deleteMovieByIdService,
  getMovieByTitleService,
  getMovieByDirectorService,
  getMovieByYearService,
  getMovieByGenreService,
};
