export{}
const fs = require ('fs');
const path = require('path')
const FILEPATH = path.join(__dirname,'../../../data/movies.json');

const loadMovies:string = fs.readFileSync(FILEPATH)

function saveMovies(movies:Array<object>):void {
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