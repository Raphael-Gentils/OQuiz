const router = require('express').Router();
const { levelRouter } = require('./levelRouter.js');
const { installRouter } = require('./installRouter.js');
const { quizRouter } = require('./quizRouter.js');
const { tagRouter } = require('./tagRouter.js');

const { catchErrors } = require('../controllers/middlewares/errorHandlers.js');

// const router = express.Router();
// const { Router } = require('express');
// const router = Router();

const { homeController } = require('../controllers/homeController.js');

router.use(quizRouter);
router.get('/', catchErrors(homeController.index));


router.use(tagRouter);
router.use(levelRouter);
router.use(installRouter);
// * \\d+ est une regex qui va valider le type du paramètre :id, ce sera un nombre entier positif ou le router nous donnera un 404
// router.get('/level/:id(\\d+)', homeController.getOneLevel);

module.exports = router;
