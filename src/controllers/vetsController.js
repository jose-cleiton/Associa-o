const vetsService = require('../services/vetsService');

const vetsController = {
  /** @type {import('express').RequestHandler} */
  async getPetsByVet(req, res) {
    const { id } = await vetsService.validateParamsId(req.params);
    const vet = await vetsService.listPetsByVet(id);
    res.json(vet);
  },
};

module.exports = vetsController;