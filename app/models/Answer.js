const { Model, DataTypes, sequelize } = require('sequelize');
const { sequelizeConnection } = require('../db/sequelize');

class Answer extends Model {}

Answer.init(
    {
        description: DataTypes.TEXT,
        question_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeConnection(),
        tableName: 'answer',
    }
);

// const Answer = sequelize.define(
//     'Answer',
//     {
//         description: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         question_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//     },
//     {
//         sequelize: sequelizeConnection(),
//         tableName: 'Answer',
//     }
// );

module.exports = { Answer };
