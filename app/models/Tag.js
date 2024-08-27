const { Model, DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../db/sequelize');

class Tag extends Model {}

Tag.init(
    {
        name: DataTypes.TEXT,
    },
    {
        sequelize: sequelizeConnection(),
        tableName: 'tag',
    }
);

module.exports = { Tag };
