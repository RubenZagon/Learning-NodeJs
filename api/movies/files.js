const fs = require ('fs');
const FILEPATH = 'data/movies.json';


const loadMovies = fs.readFileSync(FILEPATH)

function saveMovies(movies) {
  try {
    fs.writeFileSync(FILEPATH, JSON.stringify(movies));
    console.log('Colección de películas actualizada.');
  }
  catch (error) {
    console.log('Error', error);
  }
}


module.exports = {
  loadMovies,
  saveMovies

}