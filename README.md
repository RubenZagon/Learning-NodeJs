## Ejericio 5

### Encabezado

**Parte 1**

- Crear un CRUD de películas
- Añadir endpoint para hacer like de una película
- Añadir endpoint apra quitar el like de una película
- Añadir endpoint para obtener todas las películas que le hemos hecho like

**Parte 2 - Lectura de ficheros**

Siguiendo el ejercicio anterior y para no perder los datos cada vez que actualizamos:

- Guardaremos los datos en un fichero de texto
- Al arrancar el servidor debemos cargarlos en la variable movies

**Parte 3 - Middleware**

Siguiendo el ejercicio anterior y para no perder los datos cada vez que actualizamos:

- Lo primero que vamos a querer es saber si algo falla, para eso tendremos que auditarlo
- Como no queremos que hagan un abuso de peticiones vamos a crear un rate-limit por usuario

**Parte 4 - TypeScript**

Ya tenemos nuestra API de películas funcionando  vamos hacer lo siguiente:

- Migración a TypeScript
- Crear test de pruebas para tener nuestro código estable y preparado para nuevos cambios

**Parte 5 - Mongodb**

- Migración a la base de datos a Mongodb, utilizando docker

-----
### Scripts

| Comando         | Descripción                                                    |
| :-------------- | :------------------------------------------------------------- |
| `npm run dev`   | Compila los archivos en TypeScript y activa el nodemon para levantar el servidor por el puerto 3000 |
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











