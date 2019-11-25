export{}
const express = require('express');
const router = express.Router();
const controller = require('./controller');
const helper = require('./helper');

const getMoviesRes = (req, res:any, next):void => { 
  const movies = controller.getMovies()
  return res.status(200).json(movies)
};

const newMovie = (req:any, res:any):void => {
  if (req.body && req.body.title) {
    return res.status(201).json(controller.newMovie(req.body.title))
  } else {
    return res.status(400).json("Nombre inválido, no se ha podido añadir la película")
  }
};

const deleteMovie = (req:any, res:any):void => {
  const respondOfRequest = controller.deleteMovie(req.body.ID, res);

    if (respondOfRequest){
      res.status(201).json(respondOfRequest);

    } else {
      res.status(406).send('Error al borrar la película, película no encontrada.');
    };
};


function respond(respondOfRequest:boolean, res:any):void {
  if (respondOfRequest) {
    res.status(201).json(respondOfRequest);
  }
  else {
    res.status(400).json('Película no encontrada');
  }
};

const like = (req:any, res:any):void => {
  const respondOfRequest = controller.modifyLike(req.body.ID, true);
  return respond(respondOfRequest, res);
};

const dislike = (req:any, res:any):void => {
  const respondOfRequest = controller.modifyLike(req.body.ID, false);
  return respond(respondOfRequest, res);
};

const getLikes = (req:any, res:any):void => {
  const movies = controller.getMovies();
  const moviesWithLikes = movies.filter(movie => movie.like == true);

  if (moviesWithLikes.length !== 0){
    res.status(200).json(moviesWithLikes);
  } else {
    res.status(500).json("No se encontraron películas que te gusten.");
  }
};

//API REST movies
router.get('/', getMoviesRes);
  
router.post('/', newMovie);

router.delete('/', deleteMovie);

router.put('/like', like);

router.put('/dislike', dislike);

router.get('/getlikes', getLikes);


module.exports = router;


