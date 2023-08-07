import { Router } from "express";
import { createMovie, getAllMovies, getMovieById, removeMovieByID, updateMovie } from "../controllers/movies.controller";
import { check } from "../middleware/check.middleware";

const MoviesRouter = Router();

MoviesRouter
    .post("/", check, createMovie)
    .get("/", getAllMovies)
    .get("/:movieID", getMovieById)
    .delete("/:movieID", removeMovieByID)
    .put("/:movieID", updateMovie)

export default MoviesRouter;