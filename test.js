require('dotenv').config();

const { sequelizeConnection } = require('./app/db/sequelize');
const { QueryTypes } = require('sequelize');

const { User, Quiz } = require('./app/models');

async function getData() {
    const users = await User.findAll({
        where: { id: 1 },
        include: 'quizzes',
    });
    // console.log(users[0].quizzes);

    // // on accède à une prop qui n'existe pas : undefined
    // console.log(users);
    // console.log(users.quizzes);

    const user = await User.findOne({
        where: { id: 1 },
        include: 'quizzes',
    });

    // * Mission : Récupérer un Quiz et son auteur
    const quiz = await Quiz.findByPk(1, {
        include: 'author',
    });

    // TODO Corriger Laurent qui a oublié sequelize
    const query = 'SELECT * FROM "user"';
    const res = await sequelizeConnection.query(query, {
        type: QueryTypes.SELECT,
    });

    console.log(res);
}

getData();
