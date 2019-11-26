"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var file = require('./files');
var model_1 = require("./model");
var movies = JSON.parse(file.loadMovies);
var getMovies = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, model_1.Movie.find()];
    });
}); };
function newMovie(movie) {
    var movieToCreate = new model_1.Movie(__assign({}, movie));
    console.log("Creo que película guaradada");
    return movieToCreate.save();
    // if (title != null) {
    //   const newMovie = new Movie({
    //     title: title,
    //     like: false,
    //   });
    //   movies.push(newMovie);
    //   file.saveMovies(movies);
    //   return newMovie;
    // } else {
    //   return false;
    // }
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
