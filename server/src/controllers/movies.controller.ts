import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const { title, year, score, genres } = req.body;
  const { userID } = req.params;

  try {

    const genreIDs: string[] = [];

    for (const genreName of genres) {
      let genre = await prisma.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prisma.genres.create({ data: { genre: genreName } });
      }
      genreIDs.push(genre.id);
    }

    const newMovie = await prisma.movies.create({
      data: {
        title,
        year,
        score,
        genres: {
          connect: genreIDs.map((genreID: string) => ({ id: genreID })),
        },
        users: {
          connect: {
            id: userID,
          },
        },
        genresArray: genres,
      },
      include: {
        genres: true,
        users: true
      },
    });
    
    await prisma.users.update({
      where: { id: userID },
      data: {
        
      }
    })

    return res.status(201).send({ status: "Success", message: "Movie created", newMovie });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  try {

    const movie = await prisma.movies.findUnique({
      where: { id: movieID },
      include: { genres: true },
    });

    if (!movie) {
      return res.status(404).send({ msg: "Movie not found" });
    }

    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const getAllMovies = async (req: Request, res: Response): Promise<Response> => {
  try {

    const movies = await prisma.movies.findMany({
      include: {
        genres: true,
      },
    });

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  const { title, score, year, genres } = req.body;
  try {

    const movie = await prisma.movies.update({
      where: { id: movieID },
      data: { title, score, year, genres },
    });

    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const deleteMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {

    const movie = await prisma.movies.findUnique({
      where: { id: movieID },
      include: {
        users: true,
      },
    });

    if (!movie) {
      return res.status(404).send({ status: "Error", msg: "Movie not found" });
    }

    const userID = movie.users?.id;

    if (userID) {

      await prisma.users.update({
        where: { id: userID },
        data: {
          
        },
      });
    }

    await prisma.movies.delete({
      where: { id: movieID },
    });

    return res.status(200).send({ status: "Success", msg: "Deleted movie by ID" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
