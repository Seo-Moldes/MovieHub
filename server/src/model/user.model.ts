import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
//interface de tipado de las User
interface IUserDocument extends Document {

    name: string;
    email: string;
    password: string;
    movies?: string[];
    //fecha de creacion y actualizacion
    createAt: Date;
    updatedAt: Date
}
//esquema de las User
const UserSchema = new Schema<IUserDocument>({

    name: {
        type: String,
        required: [true, "name is required"]
    },

    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "password is required"]
    },

    movies: {
        //el tipo es un esquema con el tipado de objectid
        type: [{ type: Schema.Types.ObjectId, ref: "Movies" }]
    }
},
    { timestamps: true, versionKey: false }
);
//funcion para usar el bcrypt
UserSchema.pre("save", async function (next) {

    const user = this;
    //si no hay una modificacion de la contraseña se salta
    if (!user.isModified("password")) return next();
    //cuantas veces se encripta
    const salt = await bcrypt.genSalt(10);
    //a lo que se le aplica el numero de veces que se encripta
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();

});

//modelo que se exporta para que los controladores funcionen
const UserModel = model<IUserDocument>("User", UserSchema);

export default UserModel;