'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Addresses', 'createdAt', {
    type: Sequelize.DATE,
    allowNull: false
   })
   await queryInterface.addColumn('Addresses', 'updatedAt', {
    type: Sequelize.DATE,
    allowNull: false
   })
   await queryInterface.addColumn('Product_images', 'createdAt', {
    type: Sequelize.DATE,
    allowNull: false
   })
   await queryInterface.addColumn('Product_images', 'updatedAt', {
    type: Sequelize.DATE,
    allowNull: false
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Addresses', 'createdAt')
    await queryInterface.removeColumn('Addresses', 'updatedAt')
    await queryInterface.removeColumn('Product_images', 'createdAt')
    await queryInterface.removeColumn('Product_images', 'updatedAt')
  }
};
