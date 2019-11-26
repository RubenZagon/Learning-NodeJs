const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : console.log('No hay variable de entorno válido');

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB está conectada");
});
