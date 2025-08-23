import models from '../db/models/index.model.js'
const Order = models['Orders']
const User = models['User']
const orderItem = models['OrderItems']
const Product = models['Products']

export async function createOrder(req, res){
    const { user_id } = req.body
    try {
        const order = await Order.create({user_id})
        res.json(order)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create an order",
            error: error.message || error
        })
    }
}
export async function listOrder(req, res){
    try {
        const orders = await Order.findAll({
            include: [
                {model: orderItem, as: 'orderItems', include: [
                    {
                        model: Product,
                        as: 'products'
                    }
                ]},
                { model: User, as: 'user' }
            ]
        })
        res.json(orders)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't get an order",
            error: error.message || error
        })
    }
}
export async function updateOrder(req, res){}
export async function deleteOrder(req, res){}

export async function createOrderItem(req, res){
    const body = req.body
    const { product_id, order_id, quantity } = body
    try {
        const order_item = await orderItem.create({product_id, order_id, quantity})
        res.json(order_item)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create an orderItem",
            error: error.message || error
        })
    }
}
export async function listOrderItem(req, res){
    try {
        const order_item = await orderItem.findAll({
            include: [
                { model: Order, as: 'orders' },
                { model: Product, as: 'products' }
            ]
        })
        res.json(order_item)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't get an orderItem",
            error: error.message || error
        })
    }
}