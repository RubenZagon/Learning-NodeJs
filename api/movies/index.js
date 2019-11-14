const express = require('express');
const router = express.Router();
const movies = loadMovies();


let movies = [
    { ID: 0, likes: 0, title: "El misterio de los cuadros" },
    { ID: 1, likes: 0, title: "Apocalipsis final" },
    { ID: 2, likes: 0, title: "One bullet three deads" }
];



//API REST movies
router.get('/', (req, res) => {
    res.status(200).json(movies);
});

router.put('/', (req, res) => {
    let id = req.body.id;
    let film = movies.find(movie => movie.ID === id);
    if (film) {
        film.likes++;
        res.status(200).send(movies);
    }
    else res.status(400).send("Película no encontrada");
});

router.post('/', (req, res) => {
    let title = req.body.title;
    if (title != null) {
        movies.push({
            ID: movies[movies.length - 1].ID + 1,
            likes: 0,
            title: title
        })
        res.status(200).send("Pelicula añadida correctamente");
    } else {
        res.status(400).send("Error al añadir la película");
    }
});

router.delete('/', (req, res) => {
    let id = req.body.id;
    let film = movies.findIndex(movie => movie.ID == id);
    if (film > 0) movies.splice(film, 1);
    res.status(200).send(movies);
});


module.exports = router;