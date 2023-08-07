import { Document, Schema, model } from "mongoose";
//interface de tipado de las movies
interface IMoviesDocument extends Document {

    name: string;
    year: number;
    score: number;
    genre: string;
    createAt: Date;
    updatedAt: Date
}
//esquema de las movies
const MoviesSchema = new Schema<IMoviesDocument>({

    name: {
        type: String,
        required: [true, "name is required"]
    },

    year: {
        type: Number,
        required: [true, "year is required"]
    },

    score: {
        type: Number,
        required: [true, "score is required"]
    },

    genre: {
        type: String,
        required: [true, "score is required"]
    },
},
    { timestamps: true, versionKey: false }

);
//modelo que se exporta para que los controladores funcionen
const MoviesModel = model<IMoviesDocument>("Movies", MoviesSchema);

export default MoviesModel;