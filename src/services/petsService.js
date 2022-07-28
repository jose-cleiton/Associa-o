const Joi = require('joi');
const models = require('../database/models');

const petsService = {
  async validateBodyAdd(unknown) {
    const schema = Joi.object({
      name: Joi.string().required().max(255),
      userId: Joi.number().required().integer().positive(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async validateParamsId(unknown) {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(data) {
    const model = await models.pets.create(data);
    return model;
  },

  async list() {
    const pets = await models.pets.findAll({ raw: true });
    return pets;
  },

  async getLazy(id) {
    const pet = await models.pets.findByPk(id, { raw: true });
    pet.user = await models.users.findOne({
      where: { id: pet.userId },
      attributes: { exclude: ['passwordHash'] },
      raw: true,
    });
    return pet;
  },

  async getByUserId(userId) {
    const pets = await models.pets.findAll({
      where: { userId },
      raw: true,
    });
    return pets;
  },
};

module.exports = petsService;