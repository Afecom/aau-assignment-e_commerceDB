import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Product_image extends Model {
        static associate(models) {
            Product_image.belongsTo(models.Products, {
                foreignKey: 'product_id',
                as: 'products'
            })
        }
    }

    Product_image.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image_URL: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id'
            }
        }
    }, {
        sequelize,
        timestamps: true,
        modelName: 'Product_image',
        tableName: 'Product_images'
    })

    return Product_image
}