const attributesAttendances = require('../attributesAttendances');

/** @param {import('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
  const attendances = sequelize.define('attendances', attributesAttendances, {
    tableName: 'attendances',
    timestamps: false,
  });

  attendances.associate = (models) => {
    models.vets.belongsToMany(models.pets, {
      as: 'pets',
      foreignKey: 'petId',
      otherKey: 'vetId',
      through: attendances,
    });
  };
  return attendances;
};