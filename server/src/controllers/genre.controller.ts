import { Request, Response } from "express";
import { GenresModel } from "../model";


export const createGenre = async (req: Request, res: Response): Promise<Response> => {
  const {  genre } = req.body;
  try {
    const newGenre = await GenresModel.create({genre: genre});
    return res.status(201).send(newGenre);
  } catch (error) {
   return  res.status(500).send(error);
  }
};

export const getGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  try {
    const genre = await GenresModel.findById(genreID);
   return res.status(200).send(genre);
  } catch (error) {
   return res.status(500).send(error);
  }
};
export const getAllGenre = async (req: Request, res: Response): Promise<Response> => {
  try {
    const genre = await GenresModel.find();
   return res.status(200).send(genre);
  } catch (error) {
   return res.status(500).send(error);
  }
};

export const updateGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  const { genre } = req.body;
  try {
    const genreFound = await GenresModel.findByIdAndUpdate(
      genreID,
      {
        $set: { genre },
      },
      {
        new: true,
      }
    );
   return res.status(200).send(genreFound);
  } catch (error) {
   return res.status(500).send(error);

  }
};

export const deleteGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  try {
    const deleteGenre = await GenresModel.findByIdAndDelete(genreID);
   return res.status(200).send(deleteGenre);
  } catch (error) {
   return res.status(500).send(error);
  }
};