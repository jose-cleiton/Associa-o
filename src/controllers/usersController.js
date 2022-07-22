const useresService = require('../service/usersService');

const usersController = {
  /** @type {import('express').RequestHandler} */
   async list(_req, res) { 
    const useres = await useresService.list();
    res.json(useres);
  },

};

module.export = usersController;