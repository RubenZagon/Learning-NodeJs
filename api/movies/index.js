const express = require('express');
const router = express.Router();
const controller = require('./controller');

function getMovies(req, res, next) {
  try {
    controller.getMovies().then(movies => {
      res.status(200).json(movies);
    }).catch(err => {
      next(`Error in the DB: ${err}`);
    });
  } catch (e) {
    next('Movie not found');
  }
  // res.status(200).json(controller.getMovies());
}

//API REST movies
router.get('/', getMovies);

router.get('/average', (req, res) => {
  controller.getAverage();
});

router.put('/', (req, res) => res.status(200).json(controller.addLike(req.body, res)));

router.post('/', newMovie);

router.delete('/', (req, res) => controller.deletMovie(req, res));

const isValidMovieToCreate = (body) => body && body.title;

const validaMovieTitle = (movie) => {
  if (movie && movie.title) {
    return true;
  }
  throw new Error('Invalid');
};

const isValid = input => (validators) => {
  try {
    return validators.every(validator => validator(input));
  } catch (e) {
    return false;
  }
};


const validateDate = input => {
  if (input && input.date && input.date.getMonth() > 3) {
    // if (input?.date?.getMonth() > 3) {
    return true;
  }
  throw new Error('Invalid date');
};

const newMovie = (req, res, next) => {
  if (isValid(req.body)([validaMovieTitle, validateName, validateDate])) {
    res.status(200).json(controller.newMovie(req.body.title))
  } else {
    next('Invalid movie');
  }
};


module.exports = router;
