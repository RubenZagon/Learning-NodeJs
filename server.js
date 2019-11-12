/**
 * Cuenta palabras
 */
const phrase = process.argv[2].toLowerCase();
const letter = "a";

const findALetter = (phrase, letter) => {

    letterCount = 0;

    for (let position = 0; position < phrase.length; position++) {
        if (phrase.charAt(position) === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}

console.log(`"a" encontradas: ${findALetter(phrase, letter)}`);
