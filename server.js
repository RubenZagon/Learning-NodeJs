const express = require('express');
const app = express();

let rollDice = (numberOfFaces) => {
	return Math.ceil(Math.random() * parseInt(numberOfFaces));
}

const getNumber = (number) => {
	const regExp = /^\d+$/;
	return number.match(regExp);
}

app.get('/dice', (req, res) => {
	const dice = rollDice();
	res.json([{ ResultOfRollDice: dice }]);

});

app.get('/dice/:numberOfFaces', (req, res) => {

	const numbFaces = getNumber(req.params.numberOfFaces);

	if (!numbFaces) {
		res.json({ error: "Introduzca un número válido" });
	}

	resultOfRollDice = rollDice(numbFaces);

	res.json([{ result: resultOfRollDice }]);



});


app.listen(3000, () => console.log('Ready on port 3000!'));
