const { Router } = require('express');
const installRouter = Router();
const { installController } = require('../controllers/installController.js');
const { catchErrors } = require('../controllers/middlewares/errorHandlers.js')

installRouter.get('/install', catchErrors(installController.install));

module.exports = { installRouter };
