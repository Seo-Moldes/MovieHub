import { Request, Response } from "express";
import GenreModel from "../model/genre.model";

export const createGenre = async (req: Request, res: Response) => {

    const { name } = req.body;

    try {

        const newGenre = await GenreModel.create({ name });

        res.status(201).send(newGenre)

    } catch (error) {

        res.status(500).send(error);
    }
};

export const getGenreByID = async (req: Request, res: Response) => {

    const { genreID } = req.params;

    try {

        const genre = await GenreModel.findById({ genreID });

        res.status(201).send(genre);

    } catch (error) {

        res.status(500).send(error);
    }
};

export const getAllGenre = async (req: Request, res: Response) => {

    try {

        const allGenre = await GenreModel.find();

        res.status(201).send(allGenre);

    } catch (error) {

        res.status(500).send(error);
    }
};

export const updateGenreByID = async (req: Request, res: Response) => {

    const { genreID } = req.params;
    const { name } = req.body;

    try {

        const genre = await GenreModel.findByIdAndUpdate({ genreID }, { name }, { new: true })

        res.status(200).send(genre)

    } catch (error) {

        res.status(500).send(error);
    }
};

export const deleteGenreByID = async (req: Request, res: Response) => {

    const { genreID } = req.params;

    try {

        await GenreModel.findByIdAndDelete(genreID);
        res.status(204).send();

    } catch (error) {

        res.status(500).send(error);
    }
};
