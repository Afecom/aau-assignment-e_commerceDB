import { publishProduct, listProducts, updateProducts, deleteProduct } from '../controllers/products.controller.js'
import { Router } from 'express'

const productsRouter = Router()

productsRouter.post('/', publishProduct)
productsRouter.get('/', listProducts)
productsRouter.put('/:id', updateProducts)
productsRouter.delete('/:id', deleteProduct)

export default productsRouter