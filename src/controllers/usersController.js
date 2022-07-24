const Joi = require('joi');
const usersService = require('../services/usersService');

const usersController = {
  /** @type {import('express').RequestHandler} */
  async validateBodyAdd(uknown) { 
    const schema = Joi.object({
      email: Joi.string().required().email().max(255),
      passwordHash: Joi.string().required().max(255),
      name: Joi.string().required().max(255),
      phone: Joi.string().required().max(255),
    });
    const result = await schema.validateAsync(uknown);
    return result;
  },

  async list(_req, res) {
    const users = await usersService.list();
   
    res.json(users);
  },

  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const data = await usersService.validateBodyAdd(req.body);
    
    const user = await usersService.add(data);
    res.status(201).json(user);
  },
 /** @type {import('express').RequestHandler} */
  async get(req, res) {
    const { id } = await usersService.validateParamsId(req.params);
    const user = await usersService.getLazy(id);
    res.json(user);
  },

};

module.exports = usersController;