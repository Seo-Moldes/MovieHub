import { Request, Response } from 'express';
import UserModel from "../model/user.model";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const newUser = await UserModel.create({
            name,
            email,
            password
        })

        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await UserModel.find().populate({
            path: "movies",
            populate: {
                path: "genres",
                select: "_id genre",
            },
        });


        res.status(200).json(allUsers);

    } catch (error) {
        res.status(500).send(error);
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    const { userID } = req.params;
    try {
        const userById = await UserModel.findById(userID).populate({
            path: "movies",
            populate: {
                path: "genres",
                select: "_id genre",
            },
        })


        res.status(200).json(userById);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateUserById = async (req: Request, res: Response) => {
    const { userID } = req.params;
    const { name, email } = req.body;
    try {

        const user = await UserModel.findByIdAndUpdate(userID,
            { $set: { name: name, email: email } }, { new: true })

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteUserByID = async (req: Request, res: Response) => {
    const { userID } = req.params;
    try {

        await UserModel.findByIdAndDelete(userID)
        res.status(200).json();
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await UserModel.findOneAndUpdate().populate("movies").populate("movies.genres.genre")
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(500).json(error);
    }
}
