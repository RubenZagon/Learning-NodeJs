const express = require ('express');
const app = express();

const usuarios = [{name: 'Pepe'}, {name: 'Juan'}];

app.get ('/', (req,res) =>{
	res.json(usuarios);
	
});

app.listen(3000, () => console.log('Ready on port 3000!'));
