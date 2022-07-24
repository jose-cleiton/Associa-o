const attributesPets = require('../attributesPets');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('pets', attributesPets);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('pets', attributesPets);
  },
};