// const { DataTypes } = require('sequelize');

const attributes = require('../atributes');

module.exports = {
/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

  async up(queryInterface) {
    await queryInterface.createTable('users', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users', attributes);
  },
};