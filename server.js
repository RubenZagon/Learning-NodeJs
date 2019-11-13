/**
 * Lee un fichero json y cuenta las palabras que encuentra
 */
const fs = require('fs');

const FILE = process.argv[2];
const filePath = `data/${FILE}`;

let contenido;

const countWords = (phrase) => {
    return phrase.split(" ").length;
};

const readFile = (file)
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error', err);
    } else {
        const json = JSON.parse(data);
        contenido = json;
        console.log('Los datos del fichero son', json);
        console.log(`Las palabras contadas han sido: ${countWords(json)}`);
    }
});

console.log(contenido);

/*

fs.writeFile(filePath, contenido, err => {
    if (err) {
        console.error('Error', err);
    } else {

        console.log('Fichero guardado correctamente');
    }
});

*/
