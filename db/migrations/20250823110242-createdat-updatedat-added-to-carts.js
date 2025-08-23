'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Carts', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
    await queryInterface.addColumn('Carts', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Carts', 'createdAt')
    await queryInterface.removeColumn('Carts', 'updatedAt')
  }
};
