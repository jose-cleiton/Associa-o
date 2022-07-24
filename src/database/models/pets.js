const attributesPets = require('../attributesPets');

/** @param {import('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
  const pets = sequelize.define('pets', attributesPets, {
    tableName: 'pets',
  });
  pets.associate = (models) => {
    pets.belongsTo(models.users, { foreignKey: 'id', as: 'user' });
  };
  return pets;
};