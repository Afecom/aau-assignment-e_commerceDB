import { createCart, listCarts, updateCart, deleteCart } from '../controllers/carts.controller.js'
import { Router } from 'express'

const cartRouter = Router()

cartRouter.post('/', createCart)
cartRouter.get('/', listCarts)
cartRouter.put('/:id', updateCart)
cartRouter.delete('/:id', deleteCart)

export default cartRouter