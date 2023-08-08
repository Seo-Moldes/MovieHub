import { Request, Response } from 'express';
import UserModel from "../model/user.model";

import prisma from '../db/prismaClient';

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const newUser = await prisma.users.create({

            data: {
                name,
                email,
                password
            }
  
        })
           
        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await prisma.users.findMany();
        
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(500).send(error);
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    const { userID } = req.params;
    try {
        const userById = await prisma.users.findUnique({

            where:{id:userID}
        });
        
        res.status(200).json(userById);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateUserById = async (req: Request, res: Response) => {
    const { userID } = req.params;
    const { name, email, password } = req.body;
    try {

        const user = await prisma.users.update({

            where: { id: userID }, 
            data: { name, email, password }, 
        })

         res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteUserByID = async (req: Request, res: Response) => {
    const { userID } = req.params;
    try {

        await prisma.users.delete({
            where: {id:userID}
        })
        res.status(200).json();
    } catch (error) {
        res.status(500).json(error);
    }
}


