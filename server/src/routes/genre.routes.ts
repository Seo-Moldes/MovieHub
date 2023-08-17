import { Router } from "express";
import { createGenre, deleteGenreByID, getAllGenre, getGenreByID, updateGenreByID } from '../controllers/genre.controller';
import { checkJwtMiddleware } from '../middleware/checkjwt.middleware';

const GenreRouter = Router();

GenreRouter
    .post("/", createGenre)
    .get("/", checkJwtMiddleware, getAllGenre)
    .get("/:genreID", getGenreByID)
    .delete("/:genreID", deleteGenreByID)
    .put("/:genreID", updateGenreByID)

export default GenreRouter;