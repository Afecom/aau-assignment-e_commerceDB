'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
    await queryInterface.addColumn('Products', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'createdAt')
    await queryInterface.removeColumn('Products', 'updatedAt')
  }
};
