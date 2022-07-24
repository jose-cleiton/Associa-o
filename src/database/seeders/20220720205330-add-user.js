const bcrypt = require('bcrypt');

const attributes = [
  
      {
        email: 'jose_cleber@hotmail.com',
        password_hash: '123456',
        name: 'José Cleber',
        phone: '1111111111',     
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'jose_cleiton@hotmail.com',
        password_hash: '123456',
        name: 'José Cleiton',
        phone: '1111111111',      
        created_at: new Date(),
        updated_at: new Date(),
        
  },
{
        email: 'jose_claudio@hotmail.com',
        password_hash: '123456',
        name: 'José Cllaudio',
        phone: '1111111111',        
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'jose_caleo@hotmail.com',
        password_hash: '123456',
        name: 'José Caleo',
        phone: '1111111111',        
        created_at: new Date(),
        updated_at: new Date(),
        
  },      
      
]
      
const cryptoPassword = async (user) => {

  user.password_hash = await bcrypt.hash(user.password_hash, 10);
  return user;
};

const cryptoAllUsers = async (users) => {
   for (let i = 0; i < users.length; i++) {
      users[i] = await cryptoPassword(users[i]);
   }
  return users;

 }


module.exports = {
  /**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 * 
 * 
  */
   
  async up (queryInterface) {
    await queryInterface
      .bulkInsert('users', await cryptoAllUsers(attributes))
  },
  
  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
