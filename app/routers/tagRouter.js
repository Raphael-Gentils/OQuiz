const tagRouter = require('express').Router();
const { tagController } = require ('../controllers/tagController.js');

tagRouter.get('/themes', tagController.index);

module.exports = { tagRouter};