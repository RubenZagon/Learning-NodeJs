const express = require('express');
const router = express.Router();
const controller = require('./controller');


const getMovies = (req, res) => { res.status(200).json(controller.getMovies());  };


const isValid = input => (veq, validators) => {
  try {
    return validators.every(validator => validator(input));
  } catch (e) {
    return false;
  }
};

/*
const validaMovieTitle = (movie) => {
  if (movie && movie.title) {
    return true;
  }
  throw new Error('Invalid');
};

const isValidMovieToCreate = (body) => body && body.title;

const validateDate = input => {
  if (input && input.date && input.date.getMonth() > 3) {
    // if (input?.date?.getMonth() > 3) {
    return true;
  }
  throw new Error('Invalid date');
};
*/

const newMovie = (req, res, next) => {
  if (isValid(req.body)) {
    return res.status(200).json(controller.newMovie(req.body.title))
  } else {
    return res.status(400).json(controller.newMovie(req.body.title))
    //next('Invalid movie');
  }
};


//API REST movies
router.get('/', getMovies);

router.post('/', newMovie);

router.put('/', (req, res) => res.status(200).json(controller.addLike(req.body, res)));

router.delete('/', (req, res) => controller.deletMovie(req, res));


module.exports = router;
