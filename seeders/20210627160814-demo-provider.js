'use strict';

const providers = require('../providers.json').data;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let providersClone = providers.map(provider => ({
      ...provider,
      createdAt: new Date(provider.createdAt),
      updatedAt: new Date(provider.updatedAt)
    }));

    await queryInterface.bulkInsert('Providers', providersClone);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Providers', null, {});
  }
};
