const attributes = require('../atributes');

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 
 */

module.exports = (sequelize) => { 
  const model = sequelize.define('users', attributes, {
    tableName: 'users',
  });
  return model;
};
