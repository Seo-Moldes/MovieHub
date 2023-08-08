import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const { name, email, password, moviesArray } = req.body;

    try {

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newUser = await prisma.users.create({
            data: { name, email, password, moviesArray },
        });

        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    try {

        const allUsers = await prisma.users.findMany({
            include: {
                movies: {
                    include: {
                        genres: true
                    }
                }
            }
        });

        return res.status(200).json({ status: "Success", msg: "Get All Users Succesfully", allUsers });
    } catch (error) {
        return res.status(500).send(error);
    }
};

export const getUserByID = async (req: Request, res: Response): Promise<Response> => {
    const { userID } = req.params;
    try {
        const userById = await prisma.users.findUnique({
            where: { id: userID },
            include: {
                movies: {
                    include: {
                        genres: true
                    }
                }
            }
        })

        return res.status(200).json(userById);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const updateUserByID = async (req: Request, res: Response): Promise<Response> => {
    const { userID } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await prisma.users.update({
            where: { id: userID },
            data: { name, email, password }
        });


        return res.status(200).json({ status: "Success", msg: "Get User By Id Succesfully", user });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deleteUserByID = async (req: Request, res: Response): Promise<Response> => {
    const { userID } = req.params;

    try {

        const user = await prisma.users.findUnique({
            where: { id: userID },
            include: {
                movies: {
                    include: {
                        genres: true,
                    },
                },
            },
        });

        if (!user) {
            return res.status(404).json({ status: "Error", msg: "User not found" });
        }

        for (const movie of user.movies) {

            await prisma.genres.updateMany({
                where: {
                    moviesId: movie.id,
                },
                data: {
                    moviesId: null,
                },
            });

            await prisma.movies.delete({
                where: { id: movie.id },
            });
        }
        await prisma.users.delete({
            where: { id: userID },
        });

        return res.status(200).json({ status: "Success", msg: "Delete User" });
    } catch (error) {
        return res.status(500).json(error);
    }
};



