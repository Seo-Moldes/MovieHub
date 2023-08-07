import { Router } from "express";
import { createUser, deleteUserByID, getAllUsers, getUserByID, updateUserById } from "../controllers/users.controller";

const UserRouter = Router();

UserRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userID", getUserByID)
    .delete("/:userID", deleteUserByID)
    .put("/:userID", updateUserById)

export default UserRouter;