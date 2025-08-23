import { createOrder, listOrder, updateOrder, deleteOrder, createOrderItem, listOrderItem } from '../controllers/orders.controller.js'
import { Router } from 'express'

const ordersRouter = Router()

ordersRouter.post('/', createOrder)
ordersRouter.get('/', listOrder)
ordersRouter.put('/:id', updateOrder)
ordersRouter.delete('/:id', deleteOrder)
ordersRouter.post('/items', createOrderItem)
ordersRouter.get('/items', listOrderItem)

export default ordersRouter