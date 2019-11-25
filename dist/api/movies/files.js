"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require('path');
var FILEPATH = path.join(__dirname, '../../../data/movies.json');
var loadMovies = fs.readFileSync(FILEPATH);
function saveMovies(movies) {
    try {
        fs.writeFileSync(FILEPATH, JSON.stringify(movies));
        console.log('Colección de películas actualizada.');
    }
    catch (error) {
        console.log('Error', error);
    }
}
module.exports = {
    loadMovies: loadMovies,
    saveMovies: saveMovies
};
