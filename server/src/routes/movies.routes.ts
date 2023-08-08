import { Router } from "express";
import { createMovie, deleteMovieByID, getAllMovies, getMovieByID, updateMovieByID} from "../controllers/movies.controller";
import { check } from "../middleware/check.middleware";

const MoviesRouter = Router();

MoviesRouter
    .post("/:userID", createMovie)
    .get("/", getAllMovies)
    .get("/:movieID", getMovieByID)
    .delete("/:movieID", deleteMovieByID)
    .put("/:movieID", updateMovieByID)

export default MoviesRouter;