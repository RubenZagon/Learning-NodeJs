

let movies = [
  { ID: 0, likes: 0, title: "El misterio de los cuadros" },
  { ID: 1, likes: 0, title: "Apocalipsis final" },
  { ID: 2, likes: 0, title: "One bullet three deads" }
];


const getMovies = () => {
  return movies;
};

const newMovie = (req) => {
  let title = req;
  if (title != null) {
    let newMovie = {
      ID: movies[movies.length - 1].ID + 1,
      likes: 0,
      title: title
    };
    movies.push(newMovie);

    return newMovie;
  } else {

    return;
  }
};

const addLike = (req, res) => {
  let id = req;
  let film = movies.find(movie => movie.ID === id);
  if (film) {
    film.likes++;
    return film;
  } else {
    return false;
  }
};


const deleteMovie = (req) => {
  let id = req;

  let movieEncontred = movies.find(movie => movie.ID === id);

  if (undefined != movieEncontred && movieEncontred.ID >= 0) {
    movies.splice(movieEncontred.ID, 1);
    return movies;

  } else {
    return false;
  }
};

module.exports = {
  getMovies,
  addLike,
  newMovie,
  deleteMovie
};


