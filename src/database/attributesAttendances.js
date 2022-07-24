const { DataTypes } = require('sequelize');

/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
const attributesAttendances = {
      petId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'pet_id',
        references: {
          model: 'pets',
          key: 'id',
        },
      },
      vetId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'vet_id',
        references: {
          model: 'vets',
          key: 'id',
        },
      },
};
 
module.exports = attributesAttendances;