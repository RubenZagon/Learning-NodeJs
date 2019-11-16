
const controller = require ('../controller');

describe('Movies_Controllers',() => {
  test('Debe devolver error, si el título de la película es undefined',() =>{
    const pelicula = undefined;
    expect(controller.newMovie(pelicula)).toBe("Error al añadir la película");
  }),

  test('Debe devolver error al intentar añadir la pelicula, si esta está vacía',() =>{
    expect(controller.newMovie(null)).toBe("Error al añadir la película");
  }),

  test('Si contiene un título válido debe devolver la película',() =>{
    const pelicula = 'Rambo',
          newMovieOK = {ID: 3, likes:0, title: 'Rambo'};

    expect(controller.newMovie(pelicula)).toStrictEqual(newMovieOK);
  })
});
