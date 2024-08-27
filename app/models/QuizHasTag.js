const { Model, DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../db/sequelize');

class QuizHasTag extends Model {}

QuizHasTag.init(
    {
        quiz_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeConnection(),
        tableName: 'quiz_has_tag',
    }
);

module.exports = { QuizHasTag };
