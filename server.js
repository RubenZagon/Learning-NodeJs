const express = require('express');
const app = express();

let rollDice = () => {
	return Math.ceil(Math.random() * 6);
}

app.get('/dice', (req, res) => {
	const dice = rollDice();
	res.json([{ ResultOfRollDice: dice }]);

});

app.listen(3000, () => console.log('Ready on port 3000!'));
