import express, { Express } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { GenreRouter, MoviesRouter, PublicRouter, UserRouter } from "./routes";
import { checkJwtMiddleware } from "./middleware/checkjwt.middleware";
import fileUpload from 'express-fileupload'

const app: Express = express();

dotenv.config();

app.use(fileUpload({useTempFiles: true, tempFileDir: "./imgMovies"}))
app.set("PORT", process.env.PORT || 5002);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/movies",  MoviesRouter)
app.use("/users",  UserRouter)
app.use("/genres",  GenreRouter)
app.use("/publicmovies", PublicRouter )



export default app;



