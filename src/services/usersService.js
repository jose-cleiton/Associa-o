const Joi = require('joi');
const bcrypt = require('bcrypt');
const models = require('../database/models');

const usersService = {
  async validateBodyAdd(unknown) {
    const schema = Joi.object({
      email: Joi.string().required().email().max(255),
      passwordHash: Joi.string().required().max(255),
      name: Joi.string().required().max(255),
      phone: Joi.string().required().max(255),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(data) {
    const modelWithHashedPassword = {
      ...data,
      passwordHash: await bcrypt.hash(data.passwordHash, 10),
    };
    
    const model = await models.users.create(modelWithHashedPassword);
    const newUser = model.toJSON();
    const { passwordHash, ...user } = newUser;
    return user;
  },

  async list() {
    const users = await models.users.findAll({
      attributes: { exclude: ['passwordHash'] },
    });
    return users;
  },
};

module.exports = usersService;