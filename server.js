const express = require('express');
const app = express();
app.use(express.json()); //Importante para poder hacer peticiones POST

const fs = require('fs');
const FILEPATH = 'movies.json';

const mandatoryField = ['name'];

// IMPORTANTE VALIDAR SIEMPRE LA ENTRADA DE DATOS

let movies = [
	{
		"id": 0,
		"name": "Jhon Wick"
	},
	{
		"id": 1,
		"name": "Scott Philgrim contra el mundo"
	}
];


app.get('/movie', (req, res) => {

	res.json(movies);

	/*
	fs.readFile(FILEPATH, (err, data) => {
		if (err) {
			console.error('Error', err);
		} else {
			const json = JSON.parse(data);
			jsonMovie = (JSON.parse(data));
			console.log(jsonMovie);
			//res.json(json);
			res.send(jsonMovie);
		}
	});
	*/

});

app.post('/movie', (req, res) => {

	const name = req.body.name;

	if (name != null) {
		movies.push({
			id: movies[movies.length - 1].id + 1,
			likes: 0,
			name: name
		});
		return res.status(200).send('Pelicula añadida correctamente');
	} else {
		return res.status(400).send('Titulo de película no válido');
	}


	/*
	fs.appendFile(FILEPATH, newMovie, err => {
		if (err) {
			console.error('Error', err);npm
		} else {
			console.log('Pelicula añadida correctamente');
			res.send('Pelicula añadida correctamente');
		}
	})
*/
});

app.delete('/movie', (req, res) => {


});


app.put('/movie', (req, res) => {

	// Que actualice el nombre de la peli

});


app.listen(3000, () => console.log('Ready on port 3000!'));
