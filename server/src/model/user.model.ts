import { Document, model, Schema, Types } from "mongoose";
import bcrypt from "bcrypt";

interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  movies?: Types.Array<Types.ObjectId>;
  createdAt: Date;
  updatedAt: Date;
}


const UserSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required "],
    },
    email: {
      type: String,
      required: [true, "Email is required "],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required "],
    },
    movies: [{ type: Schema.Types.ObjectId, ref: "Movies" }],

  },
  { timestamps: true, versionKey: false }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash
  next();
});

const UserModel = model<IUserDocument>("User", UserSchema);

export default UserModel;



