import { Document,Types, Schema, model } from "mongoose";
import { IGenre } from "./genre.model";


interface IMoviesDocument extends Document {
  name: string;
  score: number;
  year: number;
  genres: Array<IGenre["_id"]>;
  createdAt: Date;
  updatedAt: Date;
}

const MoviesSchema = new Schema<IMoviesDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    score:{ 
      type: Number, 
      required: [true, "Score is required"], 
   },
   year: {
      type: Number,
   },
   genres: [{ type: Schema.Types.ObjectId, ref: "Genres"}]

  },
  { timestamps: true, versionKey: false }
);

const MoviesModel = model<IMoviesDocument>("Movies", MoviesSchema);

export default MoviesModel;