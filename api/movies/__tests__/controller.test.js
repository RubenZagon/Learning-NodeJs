const newMovie = require ('controller');

describe.only('Movies',() => {
    test('Debe devolver error al intentar añadir la pelicula',() =>{
        const error = "Error al añadir la película";
        expect(newMovie(error)).toBe("Error al añadir la película");
    })
});