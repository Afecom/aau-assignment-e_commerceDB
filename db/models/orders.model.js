import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Order extends Model{
        static associate(models){
            Order.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user'
            }),
            Order.hasMany(models.OrderItems, {
                foreignKey: 'order_id',
                as: 'orderItems'
            })
        }
    }

    Order.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
        timestamps: true
    })

    return Order
}