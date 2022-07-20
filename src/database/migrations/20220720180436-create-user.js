const { DataTypes } = require('sequelize');

const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        field: 'password_hash',
      },
      name: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,

      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
 };

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