const file = require ('./files')

let movies = JSON.parse(file.loadMovies)


const getMovies = () => { 
  return movies
}


const newMovie = (req) => {
  let title = req;

  if (title != null) {
    let newMovie = {
      ID: movies[movies.length - 1].ID + 1,
      like: false,
      title: title
    };
    movies.push(newMovie);
    
    file.saveMovies(movies);

    return newMovie;
  } else {

    return false;
  }
};


const deleteMovie = (req) => {
  let id = req;

  let movieEncontred = movies.find(movie => movie.ID === id);

  if (undefined != movieEncontred && movieEncontred.ID >= 0) {
    movies.splice(movieEncontred.ID, 1);
    
    file.saveMovies(movies);
    return movies;

  } else {
    return false;
  }
};

const modifyLike = (req, addOrRemove = true) => {
  let id = req;
  let modify = addOrRemove;

  let film = movies.find(movie => movie.ID === id);

  if (film) {
    if (modify == true){
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




