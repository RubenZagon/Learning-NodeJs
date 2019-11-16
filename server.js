const express = require("express");
const morgan = require("morgan"); //Te da información de los HTTP

const app = express();

const moviesRouter = require('./api/movies');
const usersRouter = require('./api/users');

app.use(express.json());
app.use(morgan("combined"));

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

/*
app.use((err, next) => {
  if (err) {
    res.status(500).send(err);
    return;
  }
});
*/

//APP START
app.listen(3000, () => console.log('Ready on port 3000!'));
