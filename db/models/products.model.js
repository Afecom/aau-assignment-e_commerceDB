import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Category, {
                foreignKey: 'category_id',
                as: 'category'
            }),
            Product.hasMany(models.ProductImages, {
                foreignKey: 'product_id',
                as: 'image'
            }),
            Product.hasMany(models.OrderItems, {
                foreignKey: 'product_id',
                as: 'order_item'
            }),
            Product.hasMany(models.Cart, {
                foreignKey: 'product_id',
                as: 'cart_item'
            })
        }
    }

    Product.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize,
        timestamps: true,
        modelName: 'Product',
        tableName: 'Products'
    })

    return Product
}