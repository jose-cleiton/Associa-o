const petsService = require('../services/petsService');

const petsController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const data = await petsService.validateBodyAdd(req.body);
    const pet = await petsService.add(data);
    res.status(201).json(pet);
  },

  /** @type {import('express').RequestHandler} */
  async get(req, res) {
    const { id } = await petsService.validateParamsId(req.params);
    const pet = await petsService.getLazy(id);
    res.json(pet);
  },

  async list(_, res) {
    const pets = await petsService.list();
    res.json(pets);
  },
};

module.exports = petsController;