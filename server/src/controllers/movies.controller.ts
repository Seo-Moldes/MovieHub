import { Request, Response } from "express";
import { GenresModel, MoviesModel, UserModel } from "../model";
import prisma from "../db/prismaClient";

// export const createMovie = async (req: Request, res: Response): Promise<Response> => {
//   const { name, year, score, genres } = req.body;
//   const { userID } = req.params;
//   try {
//     const foundGenres = await GenresModel.find({ genre: { $in: genres.map((genres: { genre: any; }) => genres.genre)}})
//     // Extract the genre ids from the found genres
//     const genreNames = foundGenres.map((genre) => genre);
    
//     const newMovie = await MoviesModel.create({ name, year, score, genres: genreNames });

//     await UserModel.findByIdAndUpdate(
//        userID,
//       {
//         $push: { movies:{_id: newMovie._id, name: newMovie.name, genres: newMovie.genres}}
//       }
//     );

//    return res.status(201).send(newMovie);
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };//

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const { title, year, score, genres, genresArray } = req.body;
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
        // Connect genres using IDs
        genres: {
          connect: genreIDs.map((genreID: string) => ({ id: genreID })),
        },
        users: {
          connect: {
            id: userID,
          },
        },
        // Store genres as an array of names
        genresArray: genres,
      },
      include: {
        genres: true,
      },
    });

    return res.status(201).send({ status: "Success", message: "Movie created", newMovie });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;  
  try {
    const movie = await MoviesModel.findById(movieID)
    if (!movie){
      return res.status(404).send({msg: "Movie not found"});
    }
    //Fetch the genres using genreIds
    const genreIds = movie.genres
    const genres = await GenresModel.find({_id: { $in: genreIds }}, {_id: 1, genre: 1  })
    movie.genres = genres
    
    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const getAllMovies = async (req: Request, res: Response): Promise<Response> => {
  try {
    const movies = await prisma.movies.findMany();

    // const moviesWithGenres = await Promise.all(
    //   movies.map(async (movie) => {
    //     const genreIds = movie.genres;
    //     const genres = await GenresModel.find({ _id: { $in: genreIds } }, { _id: 1, genre: 1 });
    //     movie.genres = genres;
    //     return movie.toObject();
    //   })
    // );

    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  const { name, score, year, genres } = req.body;
  try {
    const movie = await MoviesModel.findByIdAndUpdate(movieID,{ $set: { name, score, year, genres }, }, { new: true })
     await UserModel.findByIdAndUpdate(
      movieID,
      {
        $set: { name, score, year },
      },
      { new: true }
    );
    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
export const deleteMovieByID = async (req: Request, res: Response): Promise<Response> => {
  const { movieID } = req.params;
  
  try {
    await UserModel.findByIdAndDelete(movieID);
    await MoviesModel.findByIdAndDelete(movieID);

    return res.status(200).send("Deleted movie by ID");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};