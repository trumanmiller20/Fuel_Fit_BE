'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('Groceries', 'groceries')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('groceries', 'Groceries')
  }
}
