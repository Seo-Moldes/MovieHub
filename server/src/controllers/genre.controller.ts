import { Request, Response } from "express";
import { GenresModel } from "../model";
import prisma from "../db/prismaClient";


export const createGenre = async (req: Request, res: Response): Promise<Response> => {
  const {  genre } = req.body;
  try {
    const newGenre = await prisma.genres.create({

      data: {
       genre
    }
    })
    
    return res.status(201).send(newGenre);
  } catch (error) {
   return  res.status(500).send(error);
  }
};

export const getGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  try {
    const genre = await prisma.genres.findUnique({
      where:{id:genreID}
    })
   return res.status(200).send(genre);
  } catch (error) {
   return res.status(500).send(error);
  }
};

export const getAllGenre = async (req: Request, res: Response): Promise<Response> => {

  try {

    const genre = await prisma.genres.findMany();
   return res.status(200).send(genre);
   
  } catch (error) {
   return res.status(500).send(error);
  }
};

export const updateGenreByID = async (req: Request, res: Response): Promise<Response> => {
  const { genreID } = req.params;
  const { genre } = req.body;
  try {
    const genreFound = await prisma.genres.update({
      where: { id: genreID }, 
      data: { genre },

    })
   return res.status(200).send(genreFound);
  } catch (error) {
   return res.status(500).send(error);

  }
};

export const deleteGenreByID = async (req: Request, res: Response) => {
  const { genreID } = req.params;
  try {
     const newGenres = await prisma.genres.delete({
      where: {id:genreID}

    })
   res.status(200).send();
  } catch (error) {
   res.status(500).send(error);
  }
};