module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql',
  },

  // No resto do arquivo você vai encontrar as convenções para conectar o Sequelize em outros ambientes
};