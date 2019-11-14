const express = require('express');
const router = express.Router();
const controller = require('./controller');


//API REST movies
router.get('/', (req, res) => controller.getMovies(res));

router.put('/', (req, res) => controller.addLike(req, res));

router.post('/', (req, res) => controller.newMovie(req, res));

router.delete('/', (req, res) => controller.deletMovie(req, res));


module.exports = router;