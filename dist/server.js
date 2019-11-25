"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var morgan = require('morgan'); //Te da información de los HTTP
var compression = require('compression');
var session = require('express-session');
var methodOverride = require('method-override');
var notifier = require('node-notifier');
var rateLimit = require("express-rate-limit");
//Intercambiar los modo de trabajo para el manejo de errores
process.env.NODE_ENV = 'development';
// process.env.NODE_ENV = 'production';
var app = express();
var moviesRouter = require('./api/movies');
var usersRouter = require('./api/users');
// Rate limit
var limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Demasiadas peticiones, prueba más tarde"
});
//  apply to all requests
app.use(limiter);
//Compresión de todas las peticiones
app.use(compression());
// Session control
app.use(session({ secret: '1234' }));
app.use(express.json());
//Te da información de las peticiones HTTP
app.use(morgan('combined'));
//Manejo de errores
function errorHandler(err, req, res, next) {
    if (!err) {
        return next();
    }
    var mensagge = "Error en " + req.method + " " + req.url;
    notifier.notify({ title: 'Error', mensagge: mensagge });
    res.status(500).send('Algo ha petao');
}
if (process.env.NODE_ENV === 'development') {
    app.use(methodOverride());
    app.use(errorHandler);
}
;
//Rutas
app.get('/', function (req, res) {
    if (req.session.views) {
        req.session.views++;
        res.end('Parece que nos volvemos a ver, esta es su visita numero ' + req.session.views);
    }
    else {
        req.session.views = 1;
        res.end('Bienvenido');
    }
});
app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
/*
app.use((err, next) => {
  if (err) {
    res.status(500).send(err);
    return;
  }
});
*/
//APP START
app.listen(3000, function () { return console.log('Ready on port 3000!'); });
