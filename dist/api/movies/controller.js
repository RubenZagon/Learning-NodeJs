"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file = require('./files');
var movies = JSON.parse(file.loadMovies);
var getMovies = function () {
    return movies;
};
function newMovie(req) {
    var title = req;
    if (title != null) {
        var newMovie_1 = {
            ID: movies[movies.length - 1].ID + 1,
            like: false,
            title: title
        };
        movies.push(newMovie_1);
        file.saveMovies(movies);
        return newMovie_1;
    }
    else {
        return false;
    }
}
;
var deleteMovie = function (req) {
    var id = req;
    var movieEncontred = movies.find(function (movie) { return movie.ID === id; });
    if (undefined != movieEncontred && movieEncontred.ID >= 0) {
        movies.splice(movieEncontred.ID, 1);
        file.saveMovies(movies);
        return movies;
    }
    else {
        return false;
    }
};
var modifyLike = function (req, addOrRemove) {
    if (addOrRemove === void 0) { addOrRemove = true; }
    var id = req;
    var modify = addOrRemove;
    var film = movies.find(function (movie) { return movie.ID === id; });
    if (film) {
        if (modify == true) {
            film.like = true;
        }
        else {
            film.like = false;
        }
        file.saveMovies(movies);
        return film;
    }
    else {
        return false;
    }
};
module.exports = {
    getMovies: getMovies,
    modifyLike: modifyLike,
    newMovie: newMovie,
    deleteMovie: deleteMovie
};
