const attributesVets = require('../attributesVets');
/** @type {import('sequelize').ModelAttributes} */

/** @param {import('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
  const vets = sequelize.define('vets', attributesVets, { tableName: 'vets' });
  // vets.associate = (models) => {};
  return vets;
};