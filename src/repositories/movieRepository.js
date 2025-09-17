const db = require("../database/memoryDatabase");

function createMovie(movie) {
  db.movies.push(movie);
  return movie;
}

function getAllMovies() {
  return db.movies;
}

function updateMovieById(id, movie) {
  let index = db.movies.findIndex((movie) => movie.id == id);

  if (index === -1) return null;

  db.movies[index] = movie;
  return movie;
}

function findById(id) {
  const movieFound = db.movies.find((movie) => movie.id == id);
  if (!movieFound) return null;
  return movieFound;
}

function deleteMovieById(id) {
  let index = db.movies.findIndex((movie) => movie.id == id);

  if (index === -1) return false;

  db.movies.splice(index, 1);
  return true;
}

function getMovieByTitle(title) {
  return db.movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );
}

function getMovieByDirector(director) {
  return db.movies.filter((movie) =>
    movie.director.toLowerCase().includes(director.toLowerCase())
  );
}

function getMovieByYear(year) {
  return db.movies.filter((movie) => movie.year == year);
}

function getMovieByGenre(genre) {
  return db.movies.filter((movie) =>
    movie.genre.toLowerCase().includes(genre.toLowerCase())
  );
}

module.exports = {
  createMovie,
  getAllMovies,
  updateMovieById,
  deleteMovieById,
  getMovieByTitle,
  getMovieByDirector,
  getMovieByYear,
  getMovieByGenre,
  findById,
};
