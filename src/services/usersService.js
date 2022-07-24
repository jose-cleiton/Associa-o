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

  async validateParamsId(unknown) {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(data) {
    const modelWithHashedPassword = {
      ...data,
      passwordHash: bcrypt.hash(data.passwordHash, 10),
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

  async getLazy(id) {
    const userModel = await models.users.findByPk(id, {
      attributes: { exclude: ['passwordHash'] },
    });
    const user = userModel.toJSON();
    const petsList = await models.pets.findAll({
      where: { userId: user.id },
      attributes: { exclude: ['userId'] },
    });
    user.pets = petsList.map((pet) => pet.toJSON());
    return user;
  },

  async getEager(id) {
    const userModel = await models.users.findByPk(id, {
      attributes: { exclude: ['passwordHash'] },
      include: {
        model: models.pets,
        as: 'pets',
        attributes: { exclude: ['userId'] },
      },
    });
    const user = userModel.toJSON();
    return user;
  },
};

module.exports = usersService;