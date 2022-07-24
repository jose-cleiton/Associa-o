const Joi = require('joi');
const models = require('../database/models');

const attendancesService = {
  async validateBodyAdd(unknown) {
    const schema = Joi.object({
      vetId: Joi.number().required().integer().positive(),
      petId: Joi.number().required().integer().positive(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(data) {
    const attendanceModel = await models.attendances.create(data);
    const attendances = attendanceModel.toJSON();
    return attendances;
  },
};

module.exports = attendancesService;