const express = require('express');
const router = express.Router();
const controller = require('./controller');


//API REST movies
router.get('/', (req, res) => res.status(200).json(controller.getMovies()));

router.put('/', (req, res) => res.status(200).send(controller.addLike()));

router.post('/', (req, res) => controller.newMovie(req, res));

router.delete('/', (req, res) => controller.deletMovie(req, res));


module.exports = router;