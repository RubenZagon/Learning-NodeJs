const { Document, Schema, Model, model } = require("mongoose");

export interface IMovieModel extends Document {
  name: string,
  updated: Date,
  created: Date,
  like: boolean
}

const MovieSchema: typeof Schema = new Schema({
  name: { type: String, require: true, unique: true },
  updated: { type: Date, default: Date.now() },
  created: { type: Date, default: Date.now() },
  like: { type: Boolean }
});

export const Movie = model("movies", MovieSchema);
