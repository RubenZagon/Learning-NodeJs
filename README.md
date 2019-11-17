## Ejericio 1
-----
### Encabezado

- Crear un CRUD de películas
- Añadir endpoint para hacer like de una película
- Añadir endpoint apra quitar el like de una película
- Añadir endpoint para obtener todas las películas que le hemos hecho like
-----
### Scripts

| Comando         | Descripción                                                    |
| :-------------- | :------------------------------------------------------------- |
| `npm run start` | Ejecuta el servidor, pero no se actualiza con cada cambio      |
| `npm run dev`   | Activa el nodemon para levantar el servidor por el puerto 3000 |
| `npm run test`  | Pasa los test con Jest                                         |
| `npm run testw` | Activa Jest en modo --watch                                    |

### Endpoints

| Petición | Comando          | Descripción                                                                                                          |
| :------- | :--------------- | :------------------------------------------------------------------------------------------------------------------- |
| GET      | /movies          | Entrega todas las películas                                                                                          |
| POST     | /movies          | Añade una nueva película al JSON de películas dandole un título por el body, ejemplo de body `{ "title": 'Matrix' }` |
| DELETE   | /movies          | Borra una nueva película del JSON de películas dandole un ID por el body, ejemplo de body `{ "ID": 1 }`              |
| PUT      | /movies/like     | Le da **Like** a una película del JSON de películas dandole un ID por el body, ejemplo de body `{ "ID": 1 }`         |
| PUT      | /movies/dislike  | Le quita el **Like** a una película del JSON de películas dandole un ID por el body, ejemplo de body `{ "ID": 1 }`   |
| GET      | /movies/getlikes | Entrega todas las películas marcadas como **like**                                                                   |











