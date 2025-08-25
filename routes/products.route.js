import { publishProduct, listProducts, updateProducts, deleteProduct, createProductImage, updateProductImage, getProductImage, deleteProductImage } from '../controllers/products.controller.js'
import { Router } from 'express'

const productsRouter = Router()

productsRouter.post('/', publishProduct)
productsRouter.get('/', listProducts)
productsRouter.put('/:id', updateProducts)
productsRouter.delete('/:id', deleteProduct)
productsRouter.post('/images', createProductImage)
productsRouter.get('/images/:id', getProductImage)
productsRouter.put('/images/:id', updateProductImage)
productsRouter.delete('/images/:id', deleteProductImage)

export default productsRouter