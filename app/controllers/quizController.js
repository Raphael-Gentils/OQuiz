const { User, Quiz, Tag, Question, Level } = require('../models');

const quizController = {
    async index(req, res) {
        const quizzes = await Quiz.findAll({
            include: ['author', 'tags'],
            order: [['title', 'ASC'],],
        });
        res.render('index', { quizzes: quizzes });
    },
    async findOne(req, res) {
        const { id } = req.params;

        const quiz = await Quiz.findOne({
           where: { id: id },
           include: ['author', 'tags', 'questions'],
       });

       const questions = await Question.findAll({
        where: { quiz_id: id },
        include: ['level', 'answers'],
       });

       console.log(questions[0].level);
       res.render('quiz', { quiz: quiz, questions: questions });
    }

};

module.exports = { quizController };