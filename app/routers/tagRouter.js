const tagRouter = require('express').Router();
const { tagController } = require ('../controllers/tagController.js');
const { catchErrors } = require('../controllers/middlewares/errorHandlers.js');


tagRouter.get('/themes', catchErrors(tagController.index));

module.exports = { tagRouter};