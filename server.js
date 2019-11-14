const _ = require("lodash");
const fs = require("fs");
const express = require("express");
const app = express();

let param = process.argv[2];
app.use(express.json());


//APP START
fillDB();
app.listen(3000, () => console.log('Ready on port 3000!'));