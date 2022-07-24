const { Router } = require('express');
const vetsController = require('../controllers/vetsController');

const vetsRoute = Router();

// attendancesRoute.get('/:id', petsController.get);
// petsRoute.get('/', petsController.list);
vetsRoute.get('/:id/pets', vetsController.getPetsByVet);

module.exports = vetsRoute;