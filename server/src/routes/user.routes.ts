import { Router } from "express";
import { createUser, deleteUserByID, getAllUsers, getUserByID, updateUserByID,  } from "../controllers/users.controller";

const UserRouter = Router();

UserRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userID", getUserByID)
    .delete("/:userID", deleteUserByID)
    .put("/:userID", updateUserByID)

export default UserRouter;