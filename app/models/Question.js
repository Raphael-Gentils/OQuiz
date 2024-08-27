const { Model, DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../db/sequelize');

class Question extends Model {}

Question.init(
    {
        description: DataTypes.TEXT,
        anecdote: DataTypes.TEXT,
        wiki: DataTypes.TEXT,
        answer_id: DataTypes.INTEGER,
        level_id: DataTypes.INTEGER,
        quiz_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeConnection(),
        tableName: 'question',
    }
);

module.exports = { Question };
