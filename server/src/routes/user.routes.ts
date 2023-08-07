import { Router } from "express";
import { createUser, getAllUsers, getUserByID, removeUserByID, updateUserByID } from "../controllers/users.controller";

const UserRouter = Router();

UserRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userID", getUserByID)
    .delete("/:userID", removeUserByID)
    .put("/:userID", updateUserByID)

export default UserRouter;