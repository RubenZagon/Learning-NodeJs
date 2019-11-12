/**
 * Cuenta palabras
 */
const phrase = process.argv[2];
const letter = "a";

const countWords = (phrase) => {
    return phrase.split(" ").length;
}

const findA = (phrase, letter) => {

    letterCount = 0

    for (var position = 0; position < phrase.length; position++) {
        if (phrase.charAt(position) === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}


console.log(`El número de palabras: ${countWords(phrase)}`);
console.log(`"a" encontradas: ${findA(phrase, letter)}`);
