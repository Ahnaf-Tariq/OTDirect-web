import express from "express";
import { deleteUser, loginUser, registerUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.post("/delete", deleteUser);

export default userRouter;
