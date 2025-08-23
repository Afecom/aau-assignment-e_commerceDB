import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models){
            Cart.belongsTo(models.Products, {
                foreignKey: 'product_id',
                as: 'products'
            }),
            Cart.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'users'
            })
        }
    }

    Cart.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        timestamps: true,
        modelName: 'Cart',
        tableName: 'Carts'
    })

    return Cart
}