import { createUsers, getUsers, updateUser, deleteUser } from "../controllers/users.controller.js";
import { Router } from "express";

const userRouter = Router()

userRouter.post('/', createUsers)
userRouter.get('/', getUsers)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter