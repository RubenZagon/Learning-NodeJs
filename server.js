const express = require("express");
const app = express();

const moviesRouter = require('./api/movies');
const usersRouter = require('./api/users');

app.use(express.json());
app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

//APP START
app.listen(3000, () => console.log('Ready on port 3000!'));