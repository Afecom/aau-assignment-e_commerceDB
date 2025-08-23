'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Orders', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
    await queryInterface.addColumn('Orders', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Orders', 'createdAt')
    await queryInterface.removeColumn('Orders', 'updatedAt')
  }
};
