import models from '../db/models/index.model.js'
const Product = models['Products']
const Category = models['Category']
const Image = models['ProductImages']

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
            include: [
                { model: Category, as: "category" },
                {model: Image, as: "image"}
            ]
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

export async function createProductImage(req, res){
    const body = req.body
    const { image, product_id } = body
    try {
        const productImage = await Image.create({image, product_id})
        return res.json({
            message: "product image created successfully",
            image: productImage
        })
    } catch (error) {
        return res.status(500).json({
            message: "Couldn't create a product image",
            error: error.message || error
        })
    }
}
export async function getProductImage(req, res){
    const product_id = req.params.id
    try {
        const productImages = await Image.findAll({
            where: { product_id },
            include: { model: Product, as: "products" }
        })
        if (productImages){
            return res.status(200).json({
                message: "Images found successfully",
                images: productImages
            })
        }
        res.status(404).json({
            message: "Couldn't find an image for the product"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Couldn't fetch product images",
            error: error.message || error
        })
    }
}
export async function updateProductImage(req, res){
    const id = req.params.id
    const { image } = req.body

    try {
        const productImage = await Image.findByPk(id)
        if (productImage){
            productImage.image = image
            await productImage.save()
            return res.json({
                message: "Product image updated successfully",
                image: productImage
            })
        }
        return res.status(404).json("Product image not found")
    } catch (error) {
        return res.status(500).json({
            message: "Couldn't update the product image",
            error: error.message || error
        })
    }
}
export async function deleteProductImage(req, res){
    const id = req.params.id
    try {
        const productImage = await Image.findByPk(id)
        if (productImage){
            const deleted = await productImage.destroy()
            return res.json({
                message: "Product image deleted successfuly",
                productImage: deleted
            })
        }
        return res.status(404).json("Couldn't find the product image on our database")
    } catch (error) {
        return res.status(500).json({
            message: "Couldn't delete the product image",
            error: error.message || error
        })
    }
}