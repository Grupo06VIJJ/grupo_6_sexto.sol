
   module.exports = (sequelize, dataTypes) => {
    const alias = 'Comment';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        issue: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        content: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {
        tableName: 'comments',
        timestamps: true,
        updatedAt: false,
        createdAt: 'created_at'
    }
    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, { 
            as: "products",
            foreignKey: "product_id"
        });
        Comment.belongsTo(models.User, { 
            as: "users",
            foreignKey: "user_id"
        });
    }

    return Comment;
}

