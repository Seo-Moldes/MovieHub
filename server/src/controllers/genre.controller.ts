import { Request, Response } from "express";
import {prismaClient as prisma} from '../config/prismaClient'

export const createGenre = async (req: Request, res: Response): Promise<Response> => {
  const { genre } = req.body;
  try {

    const newGenre = await prisma.genres.create({
      data: { genre }
    })
    return res.status(201).send({ status: "Success", msg: "Create Succesfully", newGenre });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  try {

    const genre = await prisma.genres.findUnique({
      where: { id: genreID }
    });
    return res.status(200).send({ status: "Success", msg: "Get Genre By Id Succesfully", genre });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getAllGenre = async (req: Request, res: Response): Promise<Response> => {
  try {

    const genre = await prisma.genres.findMany()
    return res.status(200).json(genre)
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  const { genre } = req.body;
  try {

    if (!genre) {
      return res.status(404).send({ msg: 'Genres not found' });
    }
    const genreFound = await prisma.genres.update({
      where: {
        id: genreID
      },
      data: { genre }
    })

    return res.status(200).send(genreFound);
  } catch (error) {
    return res.status(500).send(error);

  }
};

export const deleteGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  try {

    const deleteGenre = await prisma.genres.delete({
      where: { id: genreID }
    })

    return res.status(200).send({ msg: 'Genres not found', deleteGenre });
  } catch (error) {
    return res.status(500).send(error);
  }
};
