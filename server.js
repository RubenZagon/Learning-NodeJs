const express = require('express');
const app = express();
app.use(express.json()); //Importante para poder hacer peticiones POST


const users = [{ id: 0, name: 'Pepe' }, { id: 1, name: 'Juan' }];

app.get('/users', (req, res) => {
	res.json(users);

});

const getNumber = (number) => {
	const regExp = /^\d+$/;
	return number.match(regExp);
}

app.get('/users/:id', (req, res) => {

	const userId = getNumber(req.params.id);

	if (!userId) {
		res.json({ error: "Introduzca un número válido" });
	}

	if (userId > 1 | userId < 0) {
		res.json({ error: "Actualmente solo contamos con id 0 y 1" });
	}

	const user = users.find(user => user.id == userId);
	res.json(user);

});

app.post('/users', (req, res) => {

	const newUser = req.body;
	newUser.id = Math.ceil(Math.random() * 1000);
	users.push(newUser);
	res.json(newUser);

});

app.listen(3000, () => console.log('Ready on port 3000!'));
