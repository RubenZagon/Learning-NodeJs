//const _ = require("lodash");
//const fs = require("fs");
const express = require("express");
const app = express();

const moviesRouter = require('./api/movies');

app.use(express.json());
app.use('/movies', moviesRouter);

//APP START
//fillDB();
app.listen(3000, () => console.log('Ready on port 3000!'));