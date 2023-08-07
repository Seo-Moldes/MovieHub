import { Request, Response } from "express";
import UserModel from "../model/user.model";

export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;
    try {

        if (!name || !email || !password) {

            res.status(400).send({ error: "Missing required fields" })
            return
        }

        const newUser = await UserModel.create({ name, email, password });
        res.status(201).send(newUser);

    } catch (error) {

        res.status(500).send(error);
    }
};

export const removeUserByID = async (req: Request, res: Response) => {

    const { userID } = req.params;

    try {

        await UserModel.findByIdAndDelete({ _id: userID });
        res.status(204).send();

    } catch (error) {

        res.status(500).send(error);
    }
};

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const allUser = await UserModel.find();
        res.status(201).send(allUser);

    } catch (error) {

        res.status(500).send(error);
    }
};

export const getUserByID = async (req: Request, res: Response) => {

    const { userID } = req.params;

    try {

        const user = await UserModel.findById({ _id: userID }).populate("movies");
        res.status(201).send(user);

    } catch (error) {

        res.status(500).send(error);
    }
};

export const updateUserByID = async (req: Request, res: Response) => {

    const { userID } = req.params;

    const { name, email, password } = req.body;

    try {

        const user = await UserModel.findByIdAndUpdate({ _id: userID }, { $set: { name, email, password } }, { new: true, });

        res.status(201).send(user);

    } catch (error) {

        res.status(500).send(error);
    }
};