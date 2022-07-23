// const { DataTypes } = require('sequelize');

const attributesUser = require('../attributesUser');

module.exports = {
/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

  async up(queryInterface) {
    await queryInterface.createTable('users', attributesUser);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users', attributesUser);
  },
};