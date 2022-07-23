'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pets');
  }
};