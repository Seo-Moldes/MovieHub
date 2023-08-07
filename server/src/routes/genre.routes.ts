import { Router } from "express";
import { createGenre, deleteGenreByID, getAllGenre, getGenreByID, updateGenreByID } from '../controllers/genre.controller';

const GenreRouter = Router();

GenreRouter
    .post("/", createGenre)
    .get("/", getAllGenre)
    .get("/:genreID", getGenreByID)
    .delete("/:genreID", deleteGenreByID)
    .put("/:genreID", updateGenreByID)

export default GenreRouter;