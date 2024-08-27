const quizRouter = require('express').Router();
const { quizController } = require('../controllers/quizController.js');
const { catchErrors } = require('../controllers/middlewares/errorHandlers.js');


quizRouter.get('/', catchErrors(quizController.index));
quizRouter.get('/quiz/:id(\\d+)', catchErrors(quizController.findOne));

module.exports = { quizRouter };
