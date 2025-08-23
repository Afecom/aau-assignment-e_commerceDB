'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
    await queryInterface.addColumn('Categories', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'createdAt')
    await queryInterface.removeColumn('Categories', 'updatedAt')
  }
};
