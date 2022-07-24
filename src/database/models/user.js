const attributesUser = require('../attributesUser');

module.exports = (sequelize) => {
  const users = sequelize.define('users', attributesUser, { tableName: 'users' });
  users.associate = (models) => {
    users.hasMany(models.pets, { key: 'userId', as: 'pets' });
  };
  return users;
};