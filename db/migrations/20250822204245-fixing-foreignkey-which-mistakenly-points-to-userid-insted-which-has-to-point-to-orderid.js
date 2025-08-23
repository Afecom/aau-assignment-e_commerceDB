'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orderItems', 'order_id')
    await queryInterface.addColumn('orderItems', 'order_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('orderItems', 'order_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'id'
      }
    })
    await queryInterface.removeColumn('orderItems', 'order_id')
  }
};
