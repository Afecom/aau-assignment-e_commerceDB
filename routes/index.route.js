import userRouter from "./users.route.js";
import productsRouter from "./products.route.js";
import categoryRouter from "./categories.route.js";
import ordersRouter from "./orders.route.js";
import cartRouter from "./carts.route.js";
import { Router } from "express";
const indexRouter = Router()

indexRouter.use('/users', userRouter)
indexRouter.use('/products', productsRouter)
indexRouter.use('/category', categoryRouter)
indexRouter.use('/orders', ordersRouter)
indexRouter.use('/cart', cartRouter)

export default indexRouter