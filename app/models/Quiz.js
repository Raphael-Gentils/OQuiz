const { Model, DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../db/sequelize');

class Quiz extends Model {}

Quiz.init(
    {
        title: DataTypes.TEXT,
        description: DataTypes.TEXT,
        user_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeConnection(),
        tableName: 'quiz',
        // * désactiver les timestamps si on en n'a pas besoin
        // timestamps: false,
    }
);

module.exports = { Quiz };
