module.exports = (sequelize, dataTypes) => {
    const alias = 'Material';
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
        tableName: 'materials',
        timestamps: false
    }
    const Material = sequelize.define(alias, cols, config);
    Material.associate = function (models) {
        Material.hasMany(models.Product, { 
            as: "products",
            foreignKey: "material_id"
        })
    }

    return Material;
}