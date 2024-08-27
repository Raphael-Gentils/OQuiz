const levelRouter = require('express').Router();
const { levelController } = require('../controllers/levelController.js');
const { catchErrors } = require('../controllers/middlewares/errorHandlers.js')

levelRouter.get('/levels', catchErrors(levelController.index));
levelRouter.get('/levels/edit/:id(\\d+)',catchErrors (levelController.edit));
levelRouter.post('/levels/update/:id(\\d+)', catchErrors(levelController.update));
levelRouter.post('/levels/create', catchErrors(levelController.store));
levelRouter.post('/levels/delete/:id(\\d+)', catchErrors(levelController.destroy));

module.exports = { levelRouter };
