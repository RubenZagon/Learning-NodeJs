"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var express = require('express');
var router = express.Router();
var db = [];
function fillDB() {
    for (var x = 0; x < 3; x++) {
        db.push({ name: "Rubén" + _.random(0, 100), age: 28 + _.random(0, 50) });
    }
}
//API REST USERS
router.get('/', function (req, res) {
    res.status(200).send(db);
});
router.post('/', function (req, res) {
    var _a = req.body, name = _a.name, age = _a.age;
    if (name != null && age != null) {
        db.push({ name: name, age: parseInt(age) });
        res.status(200).send(db);
    }
    else {
        res.status(400).send("No se han proporcionado todos los campos necesarios");
    }
});
fillDB();
module.exports = router;
