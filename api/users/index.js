const express = require('express');
const router = express.Router();


let db = [];

function fillDB() {
    for (let x = 0; x < 3; x++) {
        db.push({ name: "Rubén" + _.random(0, 100), age: 28 + _.random(0, 50) });
    }
}

//API REST USERS
router.get('/', (req, res) => {
    res.status(200).send(db);
});

router.post('/', (req, res) => {
    const { name, age } = req.body;
    if (name != null && age != null) {
        db.push({ name: name, age: parseInt(age) });
        res.status(200).send(db);
    } else {
        res.status(400).send("No se han proporcionado todos los campos necesarios");
    }
});

module.exports = router;