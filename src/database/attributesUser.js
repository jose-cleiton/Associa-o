const { DataTypes } = require('sequelize');

/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
const attributesUser = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
    passwordHash: {
    type: DataTypes.STRING,
    field: 'password_hash',
  },
  name: {
    type: DataTypes.STRING,
  },
   phone: {
    type: DataTypes.STRING,
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
 
module.exports = attributesUser;