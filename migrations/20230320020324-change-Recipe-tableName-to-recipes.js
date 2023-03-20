'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('Recipes', 'recipes')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('recipes', 'Recipes')
  }
}
