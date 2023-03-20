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
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      ingredients: DataTypes.ARRAY(DataTypes.STRING),
      instructions: DataTypes.TEXT('long'),
      calories: DataTypes.INTEGER,
      fat: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      carbs: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
