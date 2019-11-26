export { }
const file = require('./files')

import { Movie } from "./model";

const movies: any = JSON.parse(file.loadMovies)

const getMovies = async () => {
  return Movie.find();
};

function newMovie(movie: any): object | boolean {

  const movieToCreate = new Movie({ ...movie });
  console.log("Creo que película guaradada");
  return movieToCreate.save();
  // if (title != null) {
  //   const newMovie = new Movie({
  //     title: title,
  //     like: false,
  //   });
  //   movies.push(newMovie);

  //   file.saveMovies(movies);

  //   return newMovie;
  // } else {

  //   return false;
  // }
};


const deleteMovie = (req: object) => {
  const id = req;

  const movieEncontred: any = movies.find(movie => movie.ID === id);

  if (undefined != movieEncontred && movieEncontred.ID >= 0) {
    movies.splice(movieEncontred.ID, 1);

    file.saveMovies(movies);
    return movies;

  } else {
    return false;
  }
};

const modifyLike = (req: object, addOrRemove: boolean = true) => {
  const id = req;
  const modify = addOrRemove;

  const film = movies.find(movie => movie.ID === id);

  if (film) {
    if (modify == true) {
      film.like = true;
    } else {
      film.like = false;
    }

    file.saveMovies(movies);

    return film;

  } else {
    return false;
  }
};




module.exports = {
  getMovies,
  modifyLike,
  newMovie,
  deleteMovie
};




