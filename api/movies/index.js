const express = require('express');
const router = express.Router();
const controller = require('./controller');
const helper = require('./helper');


const getMovies = (req, res) => { res.status(200).json(controller.getMovies());  };

const newMovie = (req, res, next) => {
  if (req.body && req.body.title) {
    return res.status(201).json(controller.newMovie(req.body.title))
  } else {
    return res.status(400).json("Nombre inválido, no se ha podido añadir la película")
    //next('Invalid movie');
  }
};

const deleteMovie = (req, res) => {
  const respondOfRequest = controller.deleteMovie(req.body.ID, res);

    if (respondOfRequest){
      res.status(201).json(respondOfRequest);

    } else {
      res.status(406).send('Error al borrar la película, película no encontrada.');
    };
};

// Ejercicio
function respond(respondOfRequest, res) {
  if (respondOfRequest) {
    res.status(201).json(respondOfRequest);
  }
  else {
    res.status(400).json('Película no encontrada');
  }
};

const like = (req, res) => {
  const respondOfRequest = controller.modifyLike(req.body.ID, true);
  return respond(respondOfRequest, res);
};

const dislike = (req, res) => {
  const respondOfRequest = controller.modifyLike(req.body.ID, false);
  return respond(respondOfRequest, res);
};

const getLikes = (req, res) => {
  const movies = controller.getMovies();
  const moviesWithLikes = movies.filter(movie => movie.like == true);

  if (moviesWithLikes.length !== 0){
    res.status(200).json(moviesWithLikes);
  } else {
    res.status(500).json("No se encontraron películas que te gusten.");
  }
};


//API REST movies
router.get('/', getMovies);

router.post('/', newMovie);


router.delete('/', deleteMovie);

/// Ejercicio
router.put('/like', like);

router.put('/dislike', dislike);

router.get('/getlikes', getLikes);

module.exports = router;


