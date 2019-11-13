const express = require('express');
const app = express();
app.use(express.json()); //Importante para poder hacer peticiones POST


const users = [{ id: 0, name: 'Pepe' }, { id: 1, name: 'Juan' }];
const mandatoryField = ['name', 'username'];

app.get('/users', (req, res) => {
	res.json(users);

});

const getNumber = (number) => {
	const regExp = /^\d+$/;
	return number.match(regExp);
}

const bodyIsEmpty = (body) => {
	return body.hasOwnProperty('name');
}

const hasMandatoryField = (bodyJSON) => {

	if (!bodyJSON) {
		return false;
	}

	const stringJSON = JSON.stringify(bodyJSON)
	let validationsCount = 0;

	mandatoryField.forEach(element => {
		if (stringJSON.includes(element)) {
			validationsCount += 1;
		}
	});

	return validationsCount === mandatoryField.length
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

	if (hasMandatoryField(newUser)) {
		////////////////////////////////////////
	} else {
		///////////////////////////////////////
	};

	if (!bodyIsEmpty(req.body)) {
		res.status(400).send('Debes pasarme algo en el Body');
	} else {
		newUser.id = Math.ceil(Math.random() * 1000);
		users.push(newUser);
		res.json(newUser);
	}
});

app.listen(3000, () => console.log('Ready on port 3000!'));
