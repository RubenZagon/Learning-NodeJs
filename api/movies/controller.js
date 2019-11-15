const express = require("express");
const app = express();


let movies = [
    { ID: 0, likes: 0, title: "El misterio de los cuadros" },
    { ID: 1, likes: 0, title: "Apocalipsis final" },
    { ID: 2, likes: 0, title: "One bullet three deads" }
];



const getMovies = () => {
    return movies;
};


const addLike = (req, res) => {
    let id = req;
    let film = movies.find(movie => movie.ID === id);
    if (film) {
        film.likes++;
        return film;
    }
    else {
        res.status(400).send("Película no encontrada");
    }
};

const newMovie = (req) => {
    let title = req;
    if (title != null) {
        let newMovie = {
            ID: movies[movies.length - 1].ID + 1,
            likes: 0,
            title: title
        };
        movies.push(newMovie);
        return newMovie;
        //res.status(200).send("Pelicula añadida correctamente");
    } else {
        return "Error al añadir la película";
        //res.status(400).send("Error al añadir la película");
    }
};

const deleteMovie = (req, res) => {
    let id = req.body.ID;
    let film = movies.find(movie => movie.ID == id);

    if (film > 0) {
        movies.splice(film, 1);
        res.status(200).send(movies);
    } else {
        res.status(400).send('Error al borrar la película');
    }
};

module.exports = {
    getMovies,
    addLike,
    newMovie,
    deleteMovie,
};
