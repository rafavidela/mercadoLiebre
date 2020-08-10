module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define("Product",

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

            description: {
                type: dataTypes.STRING,
                allowNull: false,
            },

            price: {
                type: dataTypes.DOUBLE,
                allowNull: true,
            },

            category: {
                type: dataTypes.STRING,
                allowNull: false,
            },

            discount: {
                type: dataTypes.INTEGER,
                allowNull: true,
            },

            image: {
                type: dataTypes.STRING,
                allowNull: true,
            }

        },

        {
            tableName: 'products',
            timestamps: false,

        });
    return Product;
}