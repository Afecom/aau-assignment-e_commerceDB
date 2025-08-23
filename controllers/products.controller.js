import models from '../db/models/index.model.js'
const Product = models['Products']
const Category = models['Category']

export async function publishProduct(req, res){
    const body = req.body
    const { name, description, price, category_id, quantity } = body

    try {
        const product = await Product.create({name, description, price, category_id, quantity})
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create a product",
            error: error.message || error
        })
    }
}
export async function listProducts(req, res){
    try {
        const products = await Product.findAll({
            include: {
                model: Category,
                as: 'category'
            }
        })
        res.json(products)
    } catch (error) {
         res.status(404).json({
            message: "Couldn't find a product",
            error: error.message || error
        })
    }
}
export async function updateProducts(req, res){
    const id = req.params.id
    const body = req.body
    const { name, description, price, category_id, quantity } = body

    try {
        const product = await Product.findByPk(id)
        if (product){
            product.name = name
            product.description = description
            product.price = price
            product.category_id = category_id
            product.quantity = quantity
            product.save()
            res.status(200).json({
                message: "Product updated successfully",
                new_Product: product
            })
        }
        else {
            res.status(404).json("Couldn't find the product to be updated")
        }
    } catch (error) {
         res.status(400).json({
            message: "Couldn't update a product",
            error: error.message || error
        })
    }
}
export async function deleteProduct(req, res){
    const id = req.params.id
    try {
        const deleted = await Product.destroy({
            where: { id }
        })
        if (deleted){
            res.status(203).json({
                message: "Product deleted successfully",
                deleted
            })
        }
        else{
            res.status(404).json({
                message: "Couldn't find the product to delete"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Couldn't delete a product",
            error: error.message || error
        })
    }
}