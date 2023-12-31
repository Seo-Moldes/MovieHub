import { Request, Response } from "express";
import { uploadImage } from "../config/cloudinary";
import fs from "fs-extra";
import {prismaClient as prisma} from '../config/prismaClient'
import { convertToType } from "../config/convertType";


export const createMovie = async (req: Request, res: Response): Promise<Response> => {
 

  try {

    let { title, year, score, genres, description } = req.body;
    const { userID } = req.params;
    

    if (typeof title !== "string") title = title.toString();
    if (typeof description !== "string") description = description.toString();
    if (typeof year !== "number") year = Number(year);
    if (typeof score !== "number") score = Number(score);
    if (!Array.isArray(genres)) genres = [genres];

    if ((req.files as any)?.image) {

      const upload = await uploadImage((req.files as any).image.tempFilePath);
      await fs.unlink((req.files as any).image.tempFilePath)

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
          description,

          imageUrl: upload.secure_url,
          imageId: upload.public_id,

          genres: {
            connect: genreIDs.map((genreID: string) => ({ id: genreID })),
          },
          users: {
            connect: {
              email: userID,
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
        where: { email: userID },
        data: {
          moviesArray: { push: newMovie.title }
        }
      })

      return res.status(201).send({ status: "Success", message: "Movie created", newMovie })
    };

    return res.status(404).send("File not found")

  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  try {

    const movie = await prisma.movies.findUnique({
      where: { id: convertToType(movieID)  },
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
  let { title, score, year, genres, description } = req.body;

  if (typeof title !== "string") title = title.toString();
  if (typeof year !== "number") year = Number(year);
  if (typeof score !== "number") score = Number(score);
  if (!Array.isArray(genres)) genres = [genres];

  try {
    const genreIDs: string[] = [];

    for (const genreName of genres) {
      let genre = await prisma.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prisma.genres.create({ data: { genre: genreName } });
      }
      genreIDs.push(genre.id);
    }
    
      const movieUpdate = await prisma.movies.update({
        where: { id: convertToType(movieID) },
        data: {
          title,
          score,
          year,
          description,
          
          genres: {
            connect: genreIDs.map((genreID: string) => ({ id: genreID })),
          },
         
        },
      });

      return res.status(200).send(movieUpdate);
    
  } catch (error) {
    
    return res.status(500).send(error);
  }
};


export const deleteMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {

    const movie = await prisma.movies.findUnique({
      where: { id: convertToType(movieID) },
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
        where: { id: convertToType(userID)},
        data: {

        },
      });
    }

    await prisma.movies.delete({
      where: { id: convertToType(movieID) },
    });

    return res.status(200).send({ status: "Success", msg: "Deleted movie by ID" });
  } catch (error) {
    
    return res.status(500).send(error);
  }
};
