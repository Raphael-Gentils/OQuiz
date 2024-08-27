const { Router } = require('express');
const installRouter = Router();
const { installController } = require('../controllers/installController.js');

installRouter.get('/install', installController.install);

module.exports = { installRouter };
