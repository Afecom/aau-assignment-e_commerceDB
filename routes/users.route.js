import { createUsers, getUsers, updateUser, deleteUser, createUserAddress, updateUserAddress, getUserAddress, deleteUserAddress } from "../controllers/users.controller.js";
import { Router } from "express";

const userRouter = Router()

userRouter.post('/', createUsers)
userRouter.get('/', getUsers)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)
userRouter.post('/address', createUserAddress)
userRouter.get('/address/:id', getUserAddress)
userRouter.put('/address/:id', updateUserAddress)
userRouter.delete('/address/:id', deleteUserAddress)

export default userRouter