module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define("User",

        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: dataTypes.STRING,
                allowNull: false,

            },

            email: {
                type: dataTypes.STRING,
                allowNull: false,
            },

            password: {
                type: dataTypes.STRING,
                allowNull: false,
            },

            image: {
                type: dataTypes.STRING,
                allowNull: false,
            },


        },

        {
            tableName: 'users',
            timestamps: false,


        });


    return User;
}