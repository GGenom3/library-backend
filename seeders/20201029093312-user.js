'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          email: 'admin@library.com',
          password:
            '$2b$10$wU6wSvnsFQj76W1rCnl4ZOPdFHiNNNKsHTWuyHEEP1BldrWrAF4Ne',
          fullName: 'Administrator',
          gender: 'Other',
          phone: '000000000000',
          address: 'Indonesia',
          photo: 'new-user.png',
          role: 'admin',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};
