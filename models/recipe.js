'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      title: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      instructions: {
        type: DataTypes.TEXT('long')
      },
      calories: {
        type: DataTypes.INTEGER
      },
      fat: {
        type: DataTypes.INTEGER
      },
      protein: {
        type: DataTypes.INTEGER
      },
      carb: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
