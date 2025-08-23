import { Router } from 'express'
import { publishCategory, listCategories, updateCategory, deleteCategory } from '../controllers/categories.controller.js'

const categoryRouter = Router()

categoryRouter.post('/', publishCategory)
categoryRouter.get('/', listCategories)
categoryRouter.put('/:id', updateCategory)
categoryRouter.delete('/:id', deleteCategory)

export default categoryRouter