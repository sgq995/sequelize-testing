'use strict';

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

    const providers = await queryInterface.sequelize.query(
      'SELECT id FROM Providers'
    );
    const providersRows = providers[0];

    let partsClone = parts.map(part => ({
      ...part,
      createdAt: new Date(part.createdAt),
      updatedAt: new Date(part.updatedAt)
    }));

    if (providersRows.length > 0) {
      const partsPerProvider = Math.floor(parts.length / providersRows.length);
      for (let i = 0; i < providersRows.length; ++i) {
        const partsFromProvider = partsClone.splice(0, partsPerProvider);
        partsFromProvider.forEach(part => {
          part.providerId = providersRows[i].id;
        });
        await queryInterface.bulkInsert('Parts', partsFromProvider);
      }
    } else {
      console.warn('Populate Providers first')
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Parts', null, {});
  }
};
