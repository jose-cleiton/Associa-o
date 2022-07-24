const attributesUser = require('../attributesUser');

module.exports = (sequelize) => { 
  const model = sequelize.define('users', attributesUser, {
    tableName: 'users',
  });
  return model;
};
