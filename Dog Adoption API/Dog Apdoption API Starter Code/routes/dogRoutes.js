const {Router} = require('express');
const dogController = require('../controllers/dogController');

const dogRouter = Router();

dogRouter.get('/register', dogController.register_get);

dogRouter.post('/register', dogController.register_post);

dogRouter.get('/listed', dogController.list_get);


dogRouter.delete('/listed/:id', dogController.deleteDog);

module.exports = dogRouter;