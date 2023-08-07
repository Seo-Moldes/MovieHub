import { Request, Response } from "express";
import MoviesModel from "../model/movies.model";
import UserModel from "../model/user.model";

export const createMovie = async (req: Request, res: Response) => {

    const { name, year, score, genre } = req.body;

    try {
        const newMovie = await MoviesModel.create({ name, year, score, genre });

        res.status(201).send(newMovie);


    } catch (error) {

        res.status(500).send(error);
    }
};

export const removeMovieByID = async (req: Request, res: Response) => {

    const { name, year, score } = req.body;

    const { userID } = req.params;

    try {

        await MoviesModel.findByIdAndDelete(userID);

        res.status(204).send();

    } catch (error) {

        res.status(500).send(error);
    }
};

export const getAllMovies = async (req: Request, res: Response) => {

    try {

        const movies = await MoviesModel.find();

        return res.status(200).send(movies);

    } catch (error) {

        res.status(500).send(error);
    }
};

export const getMovieById = async (req: Request, res: Response) => {

    const movieID = req.params.movieID;

    try {

        const movie = await MoviesModel.findById(movieID);

        return res.status(200).send(movie);

    } catch (error) {

        res.status(500).send(error);
    }
};

export const updateMovie = async (req: Request, res: Response) => {

    const movieID = req.params.movieID;

    const { name, score, year, genre } = req.body;

    try {

        const movie = await MoviesModel.findByIdAndUpdate(movieID, { name, score, year, genre }, { new: true });

        return res.status(200).send(movie);

    } catch (error) {

        res.status(500).send(error);
    }
};