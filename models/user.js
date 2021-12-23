module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false      
        },
        password: {
            type: dataTypes.STRING(200),
            allowNull: false      
        },
       
        image: {
            type: dataTypes.STRING(100),
            allowNull: true,
            defaultValue: "default-user.png"
        }
    }
    const config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config)

    User.associate = function(models) {
        User.hasMany(models.Comment, { 
            as: "comments",
            foreignKey: "user_id"
        });  
    }

    return User;
}

