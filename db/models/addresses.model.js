import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(models) {
            Address.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'users'
            })
        }
    }

    Address.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    },{
        sequelize,
        modelName: 'Address',
        tableName: 'Addresses',
        timestamps: true
    })

    return Address
}