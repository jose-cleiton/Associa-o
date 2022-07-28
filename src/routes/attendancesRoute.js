const { Router } = require('express');
const attendancesController = require('../controllers/attendancesController');

const attendancesRoute = Router();

// attendancesRoute.get('/:id', petsController.get);
// petsRoute.get('/', petsController.list);
attendancesRoute.post('/', attendancesController.add);

module.exports = attendancesRoute;