// CREATE USER lorenzo WITH SUPERUSER PASSWORD 'secret';
const Sequelize = require('sequelize');
const { sequelizeConnection } = require('../db/sequelize');

const { User, Quiz, Tag, Level } = require('../models');
const { Question } = require('../models/Question');
const { Answer } = require('../models/Answer');

const { QuizHasTag } = require('../models/QuizHasTag');

const installController = {
    async install(req, res) {
        const sequelize = new Sequelize(process.env.DB_ADMIN_URL, {
            dialect: 'postgres',
        });

        try {
            const query = `DROP DATABASE IF EXISTS ${process.env.APP_DB};`;
            await sequelize.query(query);

            const users = await sequelize.query(
                'SELECT * FROM pg_catalog.pg_user'
            );

            const user = users[0].find(user => user.usename === 'oquiz_test');

            if (!user) {
                await sequelize.query(
                    "CREATE ROLE oquiz_test WITH LOGIN PASSWORD 'oquiz_test'"
                );
            }

            await sequelize.query(
                'CREATE DATABASE oquiz_test OWNER oquiz_test'
            );

            // * fermeture la connexion admin
            await sequelize.close();

            const client = sequelizeConnection();

            // * penser à changer DB_URL du .env
            await User.sync({ force: true });
            await Tag.sync({ force: true });
            await Quiz.sync({ force: true });
            await Level.sync({ force: true });
            await Question.sync({ force: true });
            await Answer.sync({ force: true });
            await client.query(
                'ALTER TABLE "answer" ADD FOREIGN KEY ("question_id") REFERENCES "question"("id")'
            );
            // await client.query(
            //     'ALTER TABLE "answer" DROP CONSTRAINT answer_question_id_fkey'
            // );
            await QuizHasTag.sync({ force: true });

            res.send('je suis content');
        } catch (error) {
            res.send(`<pre>${error}</pre>`);
        }
    },
};

module.exports = { installController };
