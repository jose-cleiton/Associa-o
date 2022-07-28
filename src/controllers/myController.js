const authService = require('../services/authService');
const petsService = require('../services/petsService');

const myController = {
  /** @type {import('express').RequestHandler} */
  async getPets(req, res) {
    const token = await authService.validateAuthorization(req.headers.authorization);
    const { id } = await authService.readToken(token);
    const pets = await petsService.getByUserId(id);
    res.json(pets);
  },
};

module.exports = myController;