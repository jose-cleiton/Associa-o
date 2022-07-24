const { Router } = require('express');
const petsController = require('../controllers/petsController');

const petsRoute = Router();


petsRoute.post('/', petsController.add);

module.exports = petsRoute;