const controller = require ('../controller');

describe('Movies_Controllers',() => {
  test('Debe devolver error, si el título de la película es undefined',() =>{
    const movie = undefined;
    expect(controller.newMovie(movie)).toBeFalsy();
  }),

  test('Debe devolver error al intentar añadir la pelicula, si esta está vacía',() =>{
    expect(controller.newMovie(null)).toBeFalsy();
  }),

  test('Si contiene un título válido debe devolver la película',() =>{
    const movie = 'Rambo',
          newMovieOK = {ID: 3, like:false, title: 'Rambo'};

    expect(controller.newMovie(movie)).toStrictEqual(newMovieOK);
  }),

  test('Debe devolver que el valor de like es TRUE', () =>{
    const getMovies = controller.getMovies();

    controller.modifyLike(0, true);

    expect(getMovies[0].like).toBeTruthy();
  }),

  test('Debe devolver que el valor de like es FALSE', () =>{
    const getMovies = controller.getMovies();

    controller.modifyLike(0, false);

    expect(getMovies[0].like).toBeFalsy();
  }),

  test('Debe devolver falso si no puede darle like a la plícula porque no la encuentra', () =>{
    expect(controller.modifyLike(42, true)).toBeFalsy();
  }),

  test('Debe devolver un JSON con las películas pero sin la que acabamos de borrar, que es la que añadimos con el ID:3 anteriormente', () =>{
    const movie = controller.getMovies();
    expect(controller.deleteMovie(3)).toBe(movie);
  }),

  test('Debe devolver falso si no encuentra la película para borrarla', () =>{
    expect(controller.deleteMovie(42)).toBeFalsy();
  })

});
