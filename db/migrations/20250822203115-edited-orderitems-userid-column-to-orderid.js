'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('orderItems', 'user_id', 'order_id')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('orderItems', 'order_id', 'user_id')
  }
};
