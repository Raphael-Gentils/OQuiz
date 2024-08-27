const quizRouter = require('express').Router();
const { quizController } = require('../controllers/quizController.js');

quizRouter.get('/', quizController.index);

module.exports = { quizRouter };
