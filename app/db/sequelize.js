const { Sequelize } = require('sequelize');

function sequelizeConnection() {
    const sequelize = new Sequelize(process.env.DB_URL, {
        // * cette option est obligatoire
        dialect: 'postgres',
        logging: false,
        define: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            underscored: true,
            // timestamps: false,
        },
    });

    return sequelize;
}

module.exports = { sequelizeConnection };
