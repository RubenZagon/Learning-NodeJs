let phrase = process.argv[2];

let countWords = (phrase) => {
    return phrase.split(" ").length;
}

console.log(countWords(phrase));