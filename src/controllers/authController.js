const authService = require('../services/authService');
const usersService = require('../services/usersService');

const authController = {
  /** @type {import('express').RequestHandler} */
  async login(req, res) {
    // valida se ta certo o body
    const data = await authService.validateBodyLogin(req.body);
    // pega o usuário pelo email ou dispara um erro de não encontrado
    const user = await usersService.getByEmailOrThrows(data.email);
    // verifico a senha
    await usersService.verifyUserPassword(data.password, user.passwordHash);
    // crito um token
    const token = await authService.makeToken(user);
    res.json({ token });
  },
};

module.exports = authController;