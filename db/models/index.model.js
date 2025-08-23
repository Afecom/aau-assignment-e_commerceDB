import ordersModel from './orders.model.js'
import productsModel from './products.model.js'
import usersModel from './users.model.js'
import cartsModel from './carts.model.js'
import categoriesModel from './categories.model.js'
import product_imagesModel from './product_images.model.js'
import addressesModel from './addresses.model.js'
import order_itemsModel from './order_items.model.js'
import sequelize from '../sequelize.js'
import { DataTypes } from 'sequelize'

const models =  {
    User: usersModel(sequelize, DataTypes),
    Products: productsModel(sequelize, DataTypes),
    Orders: ordersModel(sequelize, DataTypes),
    Cart: cartsModel(sequelize, DataTypes),
    Category: categoriesModel(sequelize, DataTypes),
    Addresses: addressesModel(sequelize, DataTypes),
    ProductImages: product_imagesModel(sequelize, DataTypes),
    OrderItems: order_itemsModel(sequelize, DataTypes)
}

Object.values(models).forEach((model) => {
    if(model.associate){
        model.associate(models)
    }
})

export default models