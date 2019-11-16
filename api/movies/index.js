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

const addLike = (req, res) => {
  const respondOfRequest = controller.addLike(req.body.ID, res);
if (respondOfRequest){
  res.status(201).json(respondOfRequest);
} else {
  res.status(400).json('Película no encontrada');
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

//API REST movies
router.get('/', getMovies);

router.post('/', newMovie);

router.put('/', addLike);

router.delete('/', deleteMovie);


module.exports = router;
