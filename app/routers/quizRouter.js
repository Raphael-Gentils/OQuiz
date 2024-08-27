const quizRouter = require('express').Router();
const { quizController } = require('../controllers/quizController.js');

quizRouter.get('/', quizController.index);
quizRouter.get('/quiz/:id(\\d+)', quizController.findOne);

module.exports = { quizRouter };
