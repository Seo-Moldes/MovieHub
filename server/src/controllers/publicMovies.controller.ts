import { Request, Response } from "express";
import { uploadImage } from "../config/cloudinary";
import fs from "fs-extra";
import {prismaClient as prisma} from '../config/prismaClient'
import { convertToType } from "../config/convertType";


export const createPublicMovie = async (req: Request, res: Response): Promise<Response> => {


  try {

    let { title, year, score, genres } = req.body;
    

    if (typeof title !== "string") title = title.toString();
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

      const newMovie = await prisma.publicmovies.create({
        data: {
          title,
          year,
          score,

          imageUrl: upload.secure_url,
          imageId: upload.public_id,

          genres: {
            connect: genreIDs.map((genreID: string) => ({ id: genreID })),
          },
         
          genresArray: genres,
        },
        include: {
          genres: true,
          
        },

      });


      return res.status(201).send({ status: "Success", message: "Movie created", newMovie })
    };

    return res.status(404).send("File not found")

  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getPublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  try {

    const movie = await prisma.publicmovies.findUnique({
      where: { id: convertToType(movieID)},
      include: { genres: true },
    });

    if (!movie) {
      return res.status(404).send({ msg: "Movie not found" });
    }

    return res.status(200).send(movie);
  } catch (error) {
    
    return res.status(500).send(error);
  }
};

export const getPublicAllMovies = async (req: Request, res: Response): Promise<Response> => {
  try {

    const movies = await prisma.publicmovies.findMany({
      include: {
        genres: true,
      },
    });

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
};

interface Genre {
  genre: string
}

export const updatePublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  let { title, score, year, genres } = req.body;

  if (typeof title !== "string") title = title.toString();
  if (typeof year !== "number") year = Number(year);
  if (typeof score !== "number") score = Number(score);
  if (typeof genres === "string") {
    genres = genres.split(',').map((genre: string) => genre.trim());
  }

  try {
    const genreIDs: string[] = [];

    for (const genreName of genres) {
      let genre = await prisma.genres.findUnique({ where: { genre: genreName } });

      if (!genre) {
        genre = await prisma.genres.create({ data: { genre: genreName } });
      }
      genreIDs.push(genre.id);
    }

    let imageUrl = "";
    if (req.files && req.files.image) {
     
      const upload = await uploadImage((req.files as any).image.tempFilePath);
      await fs.unlink((req.files as any).image.tempFilePath);

      imageUrl = upload.secure_url;
    }

    const movie = await prisma.publicmovies.findUnique({ where: { id: convertToType(movieID) }, include: { genres: true } });

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const currentGenres = movie.genres || [];

    const currentGenresArray: string[] = currentGenres.map((genre: { genre: string }) => genre.genre);
    const genresToRemove: string[] = currentGenresArray.filter((genre: string) => !genres.includes(genre));

    for (const genreNameToRemove of genresToRemove) {
      await prisma.genres.deleteMany({
        where: {
          genre: genreNameToRemove,
        },
      });
    }

    const movieUpdateData: Record<string, any> = {
      title,
      score,
      year,
      genres: { connect: genreIDs.map((genreID: string) => ({ id: convertToType(genreID) })) },
    };

    if (imageUrl) {
      movieUpdateData.imageUrl = imageUrl;
    }

    const movieUpdate = await prisma.publicmovies.update({
      where: { id: convertToType(movieID) },
      data: movieUpdateData,
      include: {
        genres: true,
      },
    });

    const updatedGenresArray = (movieUpdate.genres as Genre[]).map((genre) => genre.genre);

    await prisma.publicmovies.update({
      where: { id:  convertToType(movieID)  },
      data: {
        genresArray: updatedGenresArray,
      },
    });

    return res.status(200).send(movieUpdate);
  } catch (error) {
    
    return res.status(500).send(error);
  }
};
export const deletePublicMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;

  try {

    const movie = await prisma.publicmovies.findUnique({
      where: { id: convertToType(movieID) }
     
    });

    if (!movie) {
      return res.status(404).send({ status: "Error", msg: "Movie not found" });
    }


    await prisma.publicmovies.delete({
      where: { id: convertToType(movieID) },
    });

    return res.status(200).send({ status: "Success", msg: "Deleted movie by ID" });
  } catch (error) {
    
    return res.status(500).send(error);
  }
};
