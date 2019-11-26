export { };

const express = require("express");
const morgan = require("morgan"); // Te da información de los HTTP
const compression = require("compression");
const session = require('express-session');
const methodOverride = require('method-override');
const notifier = require('node-notifier');
const rateLimit = require("express-rate-limit");

const app = express();

// CONFIGURACIÓN

app.set("port", process.env.PORT || 3000);

// MIDLEWARES
app.use(express.json());

// Compresión de todas las peticiones
app.use(compression());

// Rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,// Limitador del número de peticiones por esa IP
  message:
    "Demasiadas peticiones, prueba más tarde",
});

//  apply to all requests
app.use(limiter);

// Session control
app.use(session({ secret: "1234" }));

// Te da información de las peticiones HTTP
app.use(morgan("combined"));

// Manejo de errores
function errorHandler(err, req, res, next) {
  if (!err) { return next(); }
  const mensagge = `Error en ${req.method} ${req.url}`;
  notifier.notify({ title: "Error", mensagge });
  res.status(500).send("Algo ha petao");
}

if (process.env.NODE_ENV === "development") {
  app.use(methodOverride());
  app.use(errorHandler);
}

// Rutas

const moviesRouter = require("./movies");
const usersRouter = require("./users");

app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.end("Parece que nos volvemos a ver, esta es su visita numero " + req.session.views);
  } else {
    req.session.views = 1;
    res.end("Bienvenido");
  }
});

app.use("/api/movies", moviesRouter);
app.use("/api/users", usersRouter);

module.exports = app;
