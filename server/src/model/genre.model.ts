import { Document,  model, Schema } from "mongoose";


export interface IGenre extends Document{

    genre: string;
    createdAt: Date;
    updatedAt: Date;

}

const GenreSchema = new Schema<IGenre>(
    {
        genre: {
            type: String,
            required: [true, "Genre is required"],
            unique: true

        },
    },
    {timestamps: true, versionKey: false}
);

const GenresModel = model<IGenre>("Genres", GenreSchema)

export default GenresModel;