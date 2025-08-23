import models from '../db/models/index.model.js'
const Cart = models['Cart']
const User = models['User']
const Product = models['Products']

export async function createCart(req, res){
    const body = req.body
    const { product_id, user_id, quantity } = body
    try {
        const cart = await Cart.findOne({
            where: { user_id, product_id }
        })
        if (cart){
            cart.quantity += quantity
            await cart.save()
            return res.json(cart)
        }
        const create_cart = await Cart.create({product_id, user_id, quantity})
        res.json(create_cart)
    } catch (error) {
        res.status(404).json({
            message: "Couldn't create a cart",
            error: error.message || error
        })
    }
}
export async function listCarts(req, res){
    try {
        const cart = await Cart.findAll({
            include: [
                { model: User, as:  'users' },
                { model: Product, as: 'products' }
            ]
        })
        res.json(cart)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't list carts",
            error: error.message || error
        })
    }
}
export async function updateCart(req, res){
    const body = req.body
    const id = req.params.id
    const { product_id, user_id, quantity } = body

    try {
        const cart = await Cart.findByPk(id)
        if (!cart){
            return res.status(404).json("Cart not found")
        }
        cart.product_id = product_id
        cart.quantity = quantity
        await cart.save()
        res.json({
            message: "Cart updated successfuly",
            cart: cart
        })
    } catch (error) {
        res.status(404).json({
            message: "Couldn't update a cart",
            error: error.message || error
        })
    }
}
export async function deleteCart(req, res){
    const id = req.params.id
    try {
        const deleted = await Cart.destroy({
            where: { id }
        })
        res.json({
            message: "Cart deleted successfuly",
            status: deleted
        })
    } catch (error) {
        res.status(400).json({
            message: "Couldn't delete cart",
            error: error.message || error
        })
    }
}