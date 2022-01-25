module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(7,2),
            allowNull: false      
        },
        quantity_S: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: 0
        },
        quantity_M: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: 0
        },
        quantity_L: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: 0
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false,
            defaultValue: "default-image.svg",
        },
        category_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        material_id : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }
    const config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
            as: "category",
            foreignKey: "category_id"
        });
        Product.belongsTo(models.Material, { 
            as: "material",
            foreignKey: "material_id"
        });
        Product.hasMany(models.Comment, { 
            as: "comments",
            foreignKey: "product_id"
        });
    }

    return Product;
}   