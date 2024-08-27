const { User, Quiz, Tag } = require('../models');

const quizController = {
    async index(req, res) {
        const quizzes = await Quiz.findAll({
            include: ['author', 'tags'],
        });
        res.render('index', { quizzes: quizzes });
    },

};

module.exports = { quizController };