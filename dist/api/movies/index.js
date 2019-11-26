"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var controller = require('./controller');
var helper = require('./helper');
var getMoviesRes = function (req, res, next) {
    // const movies = controller.getMovies()
    // return res.status(200).json(movies)
};
var newMovie = function (req, res) {
    if (req.body && req.body.title) {
        return res.status(201).json(controller.newMovie(req.body.title));
    }
    else {
        return res.status(400).json("Nombre inválido, no se ha podido añadir la película");
    }
};
var deleteMovie = function (req, res) {
    var respondOfRequest = controller.deleteMovie(req.body.ID, res);
    if (respondOfRequest) {
        res.status(201).json(respondOfRequest);
    }
    else {
        res.status(406).send('Error al borrar la película, película no encontrada.');
    }
    ;
};
function respond(respondOfRequest, res) {
    if (respondOfRequest) {
        res.status(201).json(respondOfRequest);
    }
    else {
        res.status(400).json('Película no encontrada');
    }
}
;
var like = function (req, res) {
    var respondOfRequest = controller.modifyLike(req.body.ID, true);
    return respond(respondOfRequest, res);
};
var dislike = function (req, res) {
    var respondOfRequest = controller.modifyLike(req.body.ID, false);
    return respond(respondOfRequest, res);
};
var getLikes = function (req, res) {
    var movies = controller.getMovies();
    var moviesWithLikes = movies.filter(function (movie) { return movie.like == true; });
    if (moviesWithLikes.length !== 0) {
        res.status(200).json(moviesWithLikes);
    }
    else {
        res.status(500).json("No se encontraron películas que te gusten.");
    }
};
// routes
router.get('/', getMoviesRes);
router.post('/', newMovie);
router.delete('/', deleteMovie);
router.put('/like', like);
router.put('/dislike', dislike);
router.get('/getlikes', getLikes);
module.exports = router;
