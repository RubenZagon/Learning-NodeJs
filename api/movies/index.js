const express = require('express');
const router = express.Router();
const controller = require('./controller');


//API REST movies
router.get('/', (req, res) => res.status(200).json(controller.getMovies()));

router.put('/', (req, res) => res.status(200).json(controller.addLike(req.body, res)));

router.post('/', (req, res) => res.status(200).json(controller.newMovie(req.body.title)));

router.delete('/', (req, res) => controller.deletMovie(req, res));


module.exports = router;