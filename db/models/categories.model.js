import { Model } from "sequelize"

export default (sequelize, DataTypes) => {
    class Category extends Model{
        static associate(models){
            Category.hasMany(models.Products, {
                foreignKey: 'category_id',
                as: 'products'
            })
        }
    }
    Category.init({
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'Categories',
        timestamps: true
    })

    return Category
}