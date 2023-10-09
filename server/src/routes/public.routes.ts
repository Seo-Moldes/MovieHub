import { Router } from "express";
import { createPublicMovie, deletePublicMovieByID, getPublicAllMovies, getPublicMovieByID, updatePublicMovieByID } from '../controllers/publicMovies.controller';

const PublicRouter = Router();

PublicRouter
    .post("/", createPublicMovie)
    .get("/", getPublicAllMovies)
    .get("/:movieID", getPublicMovieByID)
    .delete("/:movieID", deletePublicMovieByID)
    .put("/:movieID", updatePublicMovieByID)
    

export default PublicRouter;