const attendancesService = require('../services/attendancesService');

const attendancesController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const data = await attendancesService.validateBodyAdd(req.body);
    const attendance = await attendancesService.add(data);
    res.status(201).json(attendance);
  },
};

module.exports = attendancesController;