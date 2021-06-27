'use strict';

const providers = require('../providers.json').data;
const parts = require('../parts.json').data;

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

    let partsClone = parts.map(part => ({
      ...part,
      createdAt: new Date(part.createdAt),
      updatedAt: new Date(part.updatedAt)
    }));

    let providersClone = providers.map(provider => ({
      ...provider,
      createdAt: new Date(provider.createdAt),
      updatedAt: new Date(provider.updatedAt)
    }));

    const partsPerProvider = Math.floor(parts.length / providers.length);
    for (let i = 0; i < providersClone.length; ++i) {
      // providersClone[i].parts = partsClone.splice(0, partsPerProvider);
    }

    return queryInterface.bulkInsert('Providers', providersClone);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Providers', null, {});
  }
};
