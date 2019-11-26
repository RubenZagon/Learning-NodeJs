use MOVIES_DB;

db.createCollection("movies");

db.movies.insertMany([{
  "like": false,
  "name": "Jhon Wick"
}, {
  "like": false,
  "name": "Scott Philgrim contra el mundo"
}, {
  "like": false,
  "name": "El misterio de los cuadros"
}]);

db.getCollection("movies").find({})
