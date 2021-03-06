'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Printer',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Audio',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Air Conditioner',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
