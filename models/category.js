module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }
    const config = {
        tableName: 'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Product, { 
            as: "products",
            foreignKey: "category_id"
        })
    }

    return Category;
}