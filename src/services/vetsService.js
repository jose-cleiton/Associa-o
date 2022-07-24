const Joi = require('joi');
const models = require('../database/models');

const vetsService = {
  async validateParamsId(unknown) {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async listPetsByVet(vetId) {
    const vetModel = await models.vets.findByPk(vetId, {
      include: { model: models.pets, as: 'pets' },
    });
    const vet = vetModel.toJSON();
    return vet;
  },
};

module.exports = vetsService;