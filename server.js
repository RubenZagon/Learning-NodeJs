let faceNumbers = process.argv[2];

let rollDice = (faceNumbers) => {
    console.log(Math.ceil(Math.random() * parseInt(faceNumbers)));
}

rollDice(faceNumbers);