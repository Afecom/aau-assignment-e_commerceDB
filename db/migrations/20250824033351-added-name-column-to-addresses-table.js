'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Addresses', 'name', {
    type: Sequelize.TEXT,
    allowNull: false
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Addresses', 'name')
  }
};
