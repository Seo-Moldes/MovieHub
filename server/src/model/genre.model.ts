import { Document, Types, model, Schema } from "mongoose";

interface IGenre extends Document{
    
    name: string;
    createAt: Date;
    updateAt: Date;
};

const GenreSchema = new Schema<IGenre>(
    {
      
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
            trim: true
        }
    },
    {timestamps: true, versionKey: false}
);

const GenreModel = model<IGenre>("Genre", GenreSchema);

export default GenreModel;