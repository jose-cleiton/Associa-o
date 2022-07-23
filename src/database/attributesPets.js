const { DataTypes } = require('sequelize');
/**
 * 
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
const attributesPet = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        field: 'user_id',
        // apartir daqui fazemos referencia ao id do users
        references: {
          model: 'users',
          key: 'id',

        },

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
 
module.exports = attributesPet;