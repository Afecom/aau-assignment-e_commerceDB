import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class orderItem extends Model {
        static associate(models) {
            orderItem.belongsTo(models.Orders, {
                foreignKey: 'order_id',
                as: 'orders'
            }),
            orderItem.belongsTo(models.Products, {
                foreignKey: 'product_id',
                as: 'products'
            })
        }
    }

    orderItem.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id'
            }
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Orders',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: true,
        modelName: 'orderItems',
        tableName: 'orderItems'
    })

    return orderItem
}