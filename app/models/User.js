const { Model, DataTypes } = require('sequelize');
const { sequelizeConnection } = require('../db/sequelize');

class User extends Model {
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    get credentials() {
        return {
            email: this.email,
            password: this.password,
        };
    }

    // get fullname() {
    //     return 'this.firstname' + ' ' + 'this.lastname';
    // }

    // get fullname() {
    //     return 'this.firstname ' + 'this.lastname';
    // }

    // get fullname() {
    //     return 'this.firstname' + ' this.lastname';
    // }
}

User.init(
    {
        firstname: DataTypes.TEXT,
        lastname: DataTypes.TEXT,
        email: DataTypes.TEXT,
        password: DataTypes.TEXT,
    },
    {
        sequelize: sequelizeConnection(),
        tableName: 'user',
    }
);

// const user = new User();

// user.fullname;

module.exports = { User };
